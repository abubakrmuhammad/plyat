import BackButton from 'components/BackButton';
import { gamingZoneBanners, icons } from 'images';
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

const detailItems = [
  { icon: icons.dollarCircle, label: 'PKR 4,000,000' },
  { icon: icons.calendar, label: 'July 8-9, 2023' },
  {
    icon: icons.message,
    label: 'June 18, 2023',
  },
  {
    icon: icons.locationPin,
    label: 'Pak-China Friendship Center, Islamabad',
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

function TournamentDetailScreen() {
  return (
    <View style={{ flex: 1, height: '100%' }}>
      <ScrollView style={styles.screenWrapper}>
        <View style={styles.backButtonWrapper}>
          <BackButton size={28} />
        </View>

        <Image
          source={gamingZoneBanners.endgame}
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

            <Text style={styles.title}>
              Gamers Galaxy - Get ready for the biggest event in Pakistan
            </Text>
          </View>

          <Text style={styles.description}>
            Gamers Galaxy, the flagship event for Galaxy Racer Pakistan, is an
            all-inclusive esports festival with four esports tournaments with a
            huge prize pool of 20,000,000 PKR, grand musical acts, influencer
            meet and greets, panel discussions, and community turn up and play
            areas. Her Galaxy will also be featured at the festival and will be
            the countries first ever female dedicated esports tournament. Gamers
            Galaxy will also be the first esports event to ever be televised in
            partnership with Ten Sports.
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

        <View style={styles.cta}>
          <Text style={styles.ctaText}>Register</Text>
        </View>

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
});

