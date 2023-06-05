import { RouteProp } from '@react-navigation/native';
import BackButton from 'components/BackButton';
import { db } from 'firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { icons } from 'images';
import { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Text,
  Platform,
} from 'react-native';
import { theme } from 'utils/theme';
import { GamingZone, RootNavStackParamList } from 'utils/types';
import { Image as ExpoImage } from 'expo-image';
import { useDownloadURL } from 'utils/hooks';

function DetailItem({
  icon,
  label,
  disableBottomBorder = false,
}: {
  icon: any;
  label: string;
  disableBottomBorder?: boolean;
}) {
  return (
    <View
      style={[
        styles.detailItemWrapper,
        disableBottomBorder ? null : styles.bottomBorder,
      ]}
    >
      <View style={styles.detailItemIconWrapper}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 24,
            height: 24,
          }}
        />
      </View>

      <Text style={styles.detailItemLabel}>{label}</Text>
    </View>
  );
}

type GamingZoneRouteProp = RouteProp<RootNavStackParamList, 'GamingZoneDetail'>;

type GamingZoneScreenProps = {
  route: GamingZoneRouteProp;
};

function GamingZoneDetailScreen({ route }: GamingZoneScreenProps) {
  const [gamingZone, setGamingZone] = useState<GamingZone>();
  const [imageURL, getImageURL] = useDownloadURL();
  const [iconURL, getIconURL] = useDownloadURL();

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'gamingZones', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as GamingZone;

        getImageURL(data.bannerName);
        getIconURL(data.iconName);
        setGamingZone(data);
      }
    })();
  }, []);

  const { name, description, address, phone, rate, timing, specs } =
    gamingZone || {};

  const detailItems = [
    { icon: icons.dollarCircle, label: `PKR ${rate} per hour` },
    { icon: icons.clockSquare, label: timing },
    {
      icon: icons.locationPin,
      label: address,
    },
    {
      icon: icons.desktopPC,
      label: specs,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.screenWrapper}>
        <View style={styles.backButtonWrapper}>
          <BackButton size={28} />
        </View>

        <ExpoImage
          style={styles.thumbnail}
          source={imageURL}
          contentFit="cover"
          transition={240}
        />

        <View style={styles.metaWrapper}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ExpoImage
              style={styles.icon}
              source={iconURL}
              contentFit="cover"
              transition={240}
            />

            <Text style={styles.title}>{name}</Text>

            <View
              style={{
                marginLeft: 'auto',
                borderWidth: 1,
                borderColor: theme.colors.lightBlue,
                borderRadius: 50,
                padding: 12,
              }}
            >
              <Image
                source={icons.phone}
                resizeMode="contain"
                style={styles.callIcon}
              />
            </View>
          </View>

          <Text style={styles.description}>{description}</Text>

          {detailItems.map((item, index) => (
            <DetailItem
              key={index}
              icon={item.icon}
              label={item.label!}
              disableBottomBorder={index === detailItems.length - 1}
            />
          ))}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>

      {/* <Pressable> */}
      <View style={styles.cta}>
        <Text style={styles.ctaText}>See Location</Text>
      </View>
      {/* </Pressable> */}
    </View>
  );
}

export default GamingZoneDetailScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.blue,
  },
  thumbnail: {
    width: '100%',
    height: 260,
  },
  backButtonWrapper: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 64 : StatusBar.currentHeight! + 24,
    left: 28,
    zIndex: 1,
  },
  metaWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  icon: {
    width: 64,
    height: 64,
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  callIcon: {
    width: 24,
    height: 24,
  },
  description: {
    marginTop: 16,
    color: theme.colors.white,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 24,
  },
  detailItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingRight: 32,
    marginBottom: 14,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
  },
  detailItemIconWrapper: {},
  detailItemLabel: {
    marginLeft: 24,
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  cta: {
    backgroundColor: theme.colors.lightBlue,
    width: 300,
    alignSelf: 'center',
    borderRadius: 300,
    position: 'absolute',
    bottom: 48,
  },
  ctaText: {
    color: theme.colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});
