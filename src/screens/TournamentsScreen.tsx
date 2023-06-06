import ScreenWrapper from 'components/ScreenWrapper';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TopSearchBar from 'components/TopSearchBar';
import TournamentCard from 'components/TournamentCard';
import { theme } from 'utils/theme';
import { useEffect, useState } from 'react';
import { useDownloadURL, useLoading } from 'utils/hooks';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebase/firebase';
import { TournamentCategoryId, TournamentWithImageURL } from 'utils/types';
import { tournamentCategories } from 'utils/helpers';

function TournamentsScreen() {
  const navigation = useNavigation();
  const [tournaments, setTournaments] = useState<TournamentWithImageURL[]>([]);
  const [loading, loadingActions] = useLoading(false);
  const [, getImageURL] = useDownloadURL('tournaments');

  const [activeCategories, setActiveCategories] = useState<
    TournamentCategoryId[]
  >(['fortnite', 'league-of-legends', 'csgo', 'valorant', 'dota-2', 'pubg']);

  useEffect(() => {
    (async () => {
      loadingActions.start();

      const q = query(
        collection(db, 'tournaments'),
        where('categories', 'array-contains-any', activeCategories)
      );

      const querySnapshot = await getDocs(q);

      const mappedData = await Promise.all(
        querySnapshot.docs.map(async doc => {
          const imageURL = await getImageURL(doc.data().bannerName);
          return {
            id: doc.id,
            ...doc.data(),
            imageURL,
          } as TournamentWithImageURL;
        })
      );

      setTournaments(mappedData);

      loadingActions.stop();
    })();
  }, [activeCategories]);

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
              {tournamentCategories.map((category, index) => (
                <Pressable
                  key={index}
                  onPress={() => {
                    if (activeCategories.includes(category.id)) {
                      setActiveCategories(prev =>
                        prev.filter(t => t !== category.id)
                      );
                    } else {
                      setActiveCategories(prev => [...prev, category.id]);
                    }
                  }}
                >
                  <View>
                    <Image
                      source={
                        category.images[
                          activeCategories.includes(category.id)
                            ? 'active'
                            : 'inactive'
                        ]
                      }
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
                        opacity: activeCategories.includes(category.id)
                          ? 1
                          : 0.5,
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

          {loading ? (
            <ActivityIndicator size="large" color={theme.colors.lightBlue} />
          ) : (
            <>
              {[...tournaments].map((tournament, index) => (
                <Pressable
                  key={index}
                  onPress={() =>
                    navigation.navigate(
                      'TournamentDetail' as never,
                      { id: tournament.id } as never
                    )
                  }
                >
                  <TournamentCard
                    title={tournament.title}
                    image={tournament.imageURL}
                    liked={tournament.isLiked}
                  />
                </Pressable>
              ))}
            </>
          )}
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

