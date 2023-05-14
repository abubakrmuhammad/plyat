import ScreenWrapper from 'components/ScreenWrapper';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { gamingZoneBanners } from 'images';
import { useNavigation } from '@react-navigation/native';
import TopSearchBar from 'components/TopSearchBar';
import BLogCard from 'components/BlogCard';
import { theme } from 'utils/theme';
import Pill from 'components/Pill';

const blogs = [
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

function BlogsScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <TopSearchBar />

      <View style={styles.screenWrapper}>
        <ScrollView
          horizontal
          style={{
            flexDirection: 'row',
            marginBottom: 18,
          }}
          showsHorizontalScrollIndicator={false}
        >
          <Pill title="Games" color="#0084F4" />
          <Pill title="Competitive" color="#6979F8" />
          <Pill title="New Releases" color="#FF647C" />
          <Pill title="Pro Teams" color="#FFA500" />
          <Pill title="Results" color="#00C48C" />
        </ScrollView>

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

        <ScrollView style={styles.cardsWrapper}>
          {[...blogs, ...blogs].map((blog, index) => (
            <Pressable
              key={index}
              onPress={() => navigation.navigate('GamingZoneDetail' as never)}
            >
              <BLogCard
                title={blog.title}
                image={blog.image}
                description={blog.description}
              />
            </Pressable>
          ))}

          <View style={{ height: 32 }} />
        </ScrollView>
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
  },
  cardsWrapper: {
    flexDirection: 'column',
    gap: 10,
  },
});

