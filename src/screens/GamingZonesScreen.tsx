import ScreenWrapper from 'components/ScreenWrapper';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import SearchBar from 'components/SearchBar';
import TitleBar from 'components/TitleBar';
import { gamingZoneBanners } from 'images';
import GamingZoneCard from 'components/GamingZoneCard';
import { useNavigation } from '@react-navigation/native';

const gamingZones = [
  { title: 'Localhost Johar Town', image: gamingZoneBanners.localhost },
  { title: 'Endgame.io', image: gamingZoneBanners.endgame, liked: true },
  { title: 'Pixel Gaming Lounge', image: gamingZoneBanners.pixel },
  { title: 'Revedge Gaming', image: gamingZoneBanners.revedge },
];

function GamingZonesScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <TitleBar title="Gaming Zones" />

      <View style={styles.screenWrapper}>
        <SearchBar placeholder="Search Gaming Zones" />

        <ScrollView style={styles.cardsWrapper}>
          {[...gamingZones, ...gamingZones].map((gamingZone, index) => (
            <Pressable
              key={index}
              onPress={() => navigation.navigate('GamingZoneDetail' as never)}
            >
              <GamingZoneCard
                title={gamingZone.title}
                image={gamingZone.image}
                liked={gamingZone.liked}
              />
            </Pressable>
          ))}

          <View style={{ height: 32 }} />
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}

export default GamingZonesScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 24,
  },
  cardsWrapper: {
    flexDirection: 'column',
    gap: 10,
  },
});

