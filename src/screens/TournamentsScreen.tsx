import ScreenWrapper from 'components/ScreenWrapper';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { gamingZoneBanners } from 'images';
import { useNavigation } from '@react-navigation/native';
import TopSearchBar from 'components/TopSearchBar';
import TournamentCard from 'components/TournamentCard';
import { theme } from 'utils/theme';

const tournaments = [
  {
    title: 'CSGO Campus Redbull Tournament',
    image: gamingZoneBanners.localhost,
  },
  {
    title: "Galaxy Racer-Pakistan's biggest eSports... ",
    image: gamingZoneBanners.endgame,
    liked: true,
  },
  { title: 'COD 4 Summer Sizzlers', image: gamingZoneBanners.pixel },
  { title: 'Tekken 7 Localhost Weekly', image: gamingZoneBanners.revedge },
];

const categories = [
  {
    title: 'Valorant',
    imageUri:
      'https://i.pcmag.com/imagery/reviews/05mFypQIoSDkooz9qdATJ54-1..v1586539963.png',
  },
  {
    title: 'CS:GO',
    imageUri:
      'data:image/jpeg;base64,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',
  },
  {
    title: 'Dota 2',
    imageUri:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1682639497',
  },
  {
    title: 'PUBG',
    imageUri:
      'data:image/jpeg;base64,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',
  },
  {
    title: 'Fortnite',
    imageUri: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-272x380.jpg',
  },
  {
    title: 'League of Legends',
    imageUri:
      'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LoL_1200x1600-15ad6c981af8d98f50e833eac7843986',
  },
];

function TournamentsScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <TopSearchBar placeholder="Search" />

      <ScrollView style={styles.cardsWrapper}>
        <View style={styles.categoriesWrapper}>
          <Text style={styles.title}>Game Categories</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              {categories.map((category, index) => (
                <Pressable key={index} onPress={() => null}>
                  <View>
                    <Image
                      source={{ uri: category.imageUri }}
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 10,
                        marginRight: 14,
                      }}
                    />

                    <Text
                      style={{
                        color: theme.colors.white,
                        fontSize: 12,
                        fontWeight: 'bold',
                        marginTop: 6,
                        textAlign: 'center',
                        width: 80,
                      }}
                    >
                      {category.title}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.tournamentsWrapper}>
          <Text style={[styles.title, { marginLeft: 24 }]}>Featured</Text>

          {[...tournaments, ...tournaments].map((gamingZone, index) => (
            <Pressable
              key={index}
              onPress={() => navigation.navigate('GamingZoneDetail' as never)}
            >
              <TournamentCard
                title={gamingZone.title}
                image={gamingZone.image}
                liked={gamingZone.liked}
              />
            </Pressable>
          ))}

          <View style={{ height: 32 }} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default TournamentsScreen;

const styles = StyleSheet.create({
  categoriesWrapper: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 24,
  },
  tournamentsWrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.lightBlue,
    marginBottom: 18,
  },
  cardsWrapper: {
    flexDirection: 'column',
    gap: 10,
  },
});

