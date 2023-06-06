import BackButton from 'components/BackButton';
import { icons } from 'images';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Text,
  Platform,
  Pressable,
} from 'react-native';
import { theme } from 'utils/theme';
import { Image as ExpoImage } from 'expo-image';
import { useDownloadURL } from 'utils/hooks';
import { RouteProp } from '@react-navigation/native';
import { RootNavStackParamList, Tournament } from 'utils/types';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'firebase/firebase';
import { formatCurrency, formatDate } from 'utils/helpers';
import * as Linking from 'expo-linking';

function DetailItem({
  icon,
  label,
  disableBottomBorder = false,
}: {
  icon: any;
  label?: string;
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

type TournamentRouteProp = RouteProp<RootNavStackParamList, 'TournamentDetail'>;

type TournamentScreenProps = {
  route: TournamentRouteProp;
};

function TournamentDetailScreen({ route }: TournamentScreenProps) {
  const [tournament, setTournament] = useState<Tournament>();
  const [imageURL, getImageURL] = useDownloadURL('tournaments');
  const [iconURL, getIconURL] = useDownloadURL('tournaments');

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'tournaments', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as Tournament;

        getImageURL(data.bannerName);
        getIconURL(data.iconName);
        setTournament(data);
      }
    })();
  }, []);

  const {
    title,
    description,
    prize,
    eventDate,
    registrationEndDate,
    location,
    registrationLink,
  } = tournament || {};

  const detailItems = [
    { icon: icons.dollarCircle, label: `PKR ${formatCurrency(prize)}` },
    { icon: icons.calendar, label: formatDate(eventDate?.toDate()!) },
    {
      icon: icons.message,
      label: formatDate(registrationEndDate?.toDate()!),
    },
    {
      icon: icons.locationPin,
      label: location,
    },
  ];

  return (
    <View style={{ flex: 1, height: '100%' }}>
      <ScrollView style={styles.screenWrapper}>
        <View style={styles.backButtonWrapper}>
          <BackButton size={28} />
        </View>

        <ExpoImage
          source={imageURL}
          contentFit="cover"
          style={styles.thumbnail}
          transition={240}
        />

        <View style={styles.metaWrapper}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ExpoImage
              source={iconURL}
              contentFit="cover"
              style={styles.icon}
              transition={240}
            />

            <Text style={styles.title}>{title}</Text>
          </View>

          <Text style={styles.description}>{description}</Text>

          {detailItems.map((item, index) => (
            <DetailItem
              key={index}
              icon={item.icon}
              label={item.label}
              disableBottomBorder={index === detailItems.length - 1}
            />
          ))}
        </View>

        <Pressable
          onPress={async () => {
            await Linking.openURL(registrationLink!);
          }}
          disabled={!registrationLink}
        >
          <View style={[styles.cta, !registrationLink && styles.disabledCTA]}>
            <Text style={styles.ctaText}>Register</Text>
          </View>
        </Pressable>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

export default TournamentDetailScreen;

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
    maxWidth: 240,
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
    textAlign: 'right',
    flex: 1,
  },
  cta: {
    backgroundColor: theme.colors.lightBlue,
    width: 300,
    alignSelf: 'center',
    borderRadius: 300,
  },
  ctaText: {
    color: theme.colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
  disabledCTA: {
    opacity: 0.5,
  },
});

