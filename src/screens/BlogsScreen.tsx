import ScreenWrapper from 'components/ScreenWrapper';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { gamingZoneBanners } from 'images';
import { useNavigation } from '@react-navigation/native';
import TopSearchBar from 'components/TopSearchBar';
import BLogCard from 'components/BlogCard';
import { theme } from 'utils/theme';
import Pill from 'components/Pill';
import { BlogWithImageURL } from 'utils/types';
import { useEffect, useState } from 'react';
import { useDownloadURL, useLoading } from 'utils/hooks';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebase/firebase';

import { Image as ExpoImage } from 'expo-image';
const placeholderBlogs = [
  {
    title: 'Rumor: Nivera will join Team Liquid',
    image: gamingZoneBanners.localhost,
    description:
      'The 20-year-old Belgian player is reported to be replacing Kryptix.',
  },
  {
    title:
      'Gambit Esports became the champion of VCT 2021: Stage 3 Masters Berlin',
    image: gamingZoneBanners.endgame,
    description:
      'In the grand final of the championship, the Russian team beat Team Envy with a score of 3: 0, thus earning $ 225,000.',
  },
  {
    title: 'Team oNe eSports are the champions of the Six August 2021 Major!',
    image: gamingZoneBanners.pixel,
    description: 'In the final, the Brazilians beat Team Empire.',
  },
  {
    title: 'HITMAN 3 will receive new DLCs next year',
    image: gamingZoneBanners.revedge,
    description: 'IO Interactive talked about it.',
  },
  {
    title: 'PUBG World Championship 2021 will be held in a "hybrid" format',
    image: gamingZoneBanners.revedge,
    description: 'This was told by KRAFTON.',
  },
];

const tags = [
  { label: 'Games', color: '#0084F4', id: 'games' },
  { label: 'Competitive', color: '#6979F8', id: 'competitive' },
  { label: 'New Releases', color: '#FF647C', id: 'new-releases' },
  { label: 'Pro Teams', color: '#FFB800', id: 'pro-teams' },
  { label: 'Results', color: '#00C48C', id: 'results' },
];

function BlogsScreen() {
  const navigation = useNavigation();
  const [blogs, setBlogs] = useState<BlogWithImageURL[]>([]);
  const [loading, loadingActions] = useLoading(false);
  const [, getImageURL] = useDownloadURL('news');

  const [activeTags, setActiveTags] = useState<string[]>([
    'games',
    'competitive',
    'new-releases',
    'pro-teams',
    'results',
  ]);

  useEffect(() => {
    (async () => {
      loadingActions.start();

      const q = query(
        collection(db, 'news'),
        where('tags', 'array-contains-any', activeTags)
      );

      const querySnapshot = await getDocs(q);

      const mappedData = await Promise.all(
        querySnapshot.docs.map(async doc => {
          const imageURL = await getImageURL(doc.data().bannerName);
          return {
            id: doc.id,
            ...doc.data(),
            imageURL,
          } as BlogWithImageURL;
        })
      );

      setBlogs(mappedData);

      loadingActions.stop();
    })();
  }, [activeTags]);

  return (
    <ScreenWrapper>
      <TopSearchBar placeholder="Search News" />

      <View style={styles.screenWrapper}>
        <View>
          <ScrollView
            horizontal
            style={{
              // flexDirection: 'row',
              marginBottom: 18,
            }}
            showsHorizontalScrollIndicator={false}
          >
            {tags.map((tag, index) => (
              <Pill
                key={index}
                title={tag.label}
                color={tag.color}
                onPress={() => {
                  if (activeTags.includes(tag.id)) {
                    setActiveTags(prev => prev.filter(t => t !== tag.id));
                  } else {
                    setActiveTags(prev => [...prev, tag.id]);
                  }
                }}
                inactive={!activeTags.includes(tag.id)}
              />
            ))}
          </ScrollView>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.colors.lightBlue,
            marginBottom: 18,
          }}
        >
          Latest News
        </Text>

        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.lightBlue} />
        ) : (
          <ScrollView style={styles.cardsWrapper}>
            {blogs.length === 0 && (
              <View
                style={{
                  marginTop: 36,
                }}
              >
                <Text
                  style={{
                    fontSize: 42,
                    fontWeight: 'bold',
                    color: theme.colors.lightBlue,
                    textAlign: 'center',
                    marginTop: 18,
                  }}
                >
                  :/
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: theme.colors.lightBlue,
                    marginBottom: 18,
                    textAlign: 'center',
                    marginTop: 14,
                  }}
                >
                  No Blogs Found
                </Text>
              </View>
            )}

            {blogs.map((blog, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  navigation.navigate(
                    'BlogDetail' as never,
                    { id: blog.id } as never
                  )
                }
              >
                <BLogCard
                  title={blog.title}
                  image={blog.imageURL}
                  description={blog.description}
                  date={blog.publishedDate.toDate()}
                />
              </Pressable>
            ))}

            <View style={{ height: 32 }} />
          </ScrollView>
        )}
      </View>
    </ScreenWrapper>
  );
}

export default BlogsScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
  },
  cardsWrapper: {
    flexDirection: 'column',
    gap: 10,
  },
});

