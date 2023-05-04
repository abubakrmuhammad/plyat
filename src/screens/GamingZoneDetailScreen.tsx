import BackButton from 'components/BackButton';
import { gamingZoneBanners, icons } from 'images';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Text,
  Pressable,
} from 'react-native';
import { theme } from 'utils/theme';

const detailItems = [
  { icon: icons.dollarCircle, label: 'PKR 150 per hour' },
  { icon: icons.clockSquare, label: 'Open 24/7' },
  {
    icon: icons.locationPin,
    label: 'Floor 2, Civic Center Barkat Market, New، Garden Town, Lahore',
  },
  {
    icon: icons.desktopPC,
    label: 'i5 8700k / 1060 6gb / 144hz',
  },
];

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

function GamingZoneDetailScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView style={styles.screenWrapper}>
        <View style={styles.backButtonWrapper}>
          <BackButton size={28} />
        </View>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
          }}
          resizeMode="cover"
          style={styles.thumbnail}
        />

        <View style={styles.metaWrapper}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={gamingZoneBanners.gamingZoneIcon}
              resizeMode="cover"
              style={styles.icon}
            />

            <Text style={styles.title}>The Localhost Gaming</Text>

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

          <Text style={styles.description}>
            One of the best Pakistan's eSports Lounge, spreading on 1600 sqft of
            the area which is packed with Food Court, Play Station 4, Xbox 360s
            and Premium Gaming
          </Text>

          {detailItems.map((item, index) => (
            <DetailItem
              key={index}
              icon={item.icon}
              label={item.label}
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
    top: StatusBar.currentHeight! + 24,
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
