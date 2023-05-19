import ScreenWrapper from 'components/ScreenWrapper';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Platform,
  StatusBar,
} from 'react-native';
import { blogBanners, gamingZoneBanners } from 'images';
import { useNavigation } from '@react-navigation/native';
import TopSearchBar from 'components/TopSearchBar';
import BLogCard from 'components/BlogCard';
import { theme } from 'utils/theme';
import Pill from 'components/Pill';
import BackButton from 'components/BackButton';

const copy = `# h1 Heading 8-)

**This is some bold text!**

This is normal text
`;

function BlogDetailScreen() {
  const navigation = useNavigation();

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
          source={blogBanners.placeholder}
          resizeMode="cover"
          style={styles.thumbnail}
        />

        <View style={{ height: 32 }} />

        <View
          style={{
            paddingHorizontal: 32,
          }}
        >
          <Text style={styles.title}>
            Gambit Esports became the champion of VCT 2021: Stage 3 Masters
            Berlin
          </Text>

          <View style={{ height: 20 }} />

          <Text style={styles.para}>
            Gambit Esports became the champion of VCT 2021: Stage 3 Masters
            Berlin. In the grand final of the championship, the Russian team
            beat Team Envy with a score of 3: 0, thus earning $ 225,000.
          </Text>

          <Text style={styles.para}>
            The final meeting began on the Bind map, which became the choice of
            the Russian team. However, the first half was dominated by the North
            Americans, who showed solid defense and won the half with a score of
            7: 5. But after the change of sides, Gambit already managed to seize
            the advantage, at some point and even got a chance to close the
            card. Nevertheless, Team Envy managed to reduce the case to
            overtime, as a result of which the victory was still in favor of the
            Russian team - 15:13.
          </Text>

          <Text style={styles.para}>
            On Haven, once a permaban of Gambit, the Russian team managed to
            contain the onslaught of the North Americans, who won just 8 rounds
            for the strong side. Of course, this was not enough in the match
            against Gambit, which played an impeccable half in the attack,
            winning the opponent's pick with a score of 13:11.
          </Text>

          <Text style={styles.para}>
            On the Split map, the intrigue continued until the start of the
            second half, when Gambit abruptly switched on the fifth gear and
            began to gain round after round. At some point, it began to seem
            that Team Envy resigned to their fate, doing nothing in the attack.
            Such a gift was skillfully used by the Russian team, which
            confidently closed their own selection with a score of 13: 9, and at
            the same time won the championship.
          </Text>

          <Text style={styles.para}>
            Following this victory, Team Gambit directly qualified for VALORANT
            Champions 2021, making room for Fnatic, which is now progressing to
            the championship on points scored. At the same time, Team Envy will
            also be represented at the tournament in Berlin, occupying the
            second place in the North American table.
          </Text>

          <View style={{ paddingHorizontal: 32 }}></View>
        </View>
      </ScrollView>
    </View>
  );
}

export default BlogDetailScreen;

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
  title: {
    fontSize: 18,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  para: {
    fontSize: 13,
    lineHeight: 20,
    color: theme.colors.white,
    marginBottom: 10,
  },
});

