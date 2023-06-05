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
import { RouteProp, useNavigation } from '@react-navigation/native';
import TopSearchBar from 'components/TopSearchBar';
import BLogCard from 'components/BlogCard';
import { theme } from 'utils/theme';
import Pill from 'components/Pill';
import BackButton from 'components/BackButton';
import { Blog, RootNavStackParamList } from 'utils/types';
import { useEffect, useState } from 'react';
import { useDownloadURL } from 'utils/hooks';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'firebase/firebase';
import { Image as ExpoImage } from 'expo-image';

import Markdown from 'react-native-simple-markdown';

type BlogRouteProp = RouteProp<RootNavStackParamList, 'BlogDetail'>;

type BlogScreenProps = {
  route: BlogRouteProp;
};

const markdownStyles = {
  heading3: {
    fontSize: 16,
    color: theme.colors.white,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 24,
  },
  text: {
    color: theme.colors.white,
    lineHeight: 20,
    fontSize: 14,
  },
};

function BlogDetailScreen({ route }: BlogScreenProps) {
  const navigation = useNavigation();

  const [blog, setBlog] = useState<Blog>();
  const [imageURL, getImageURL] = useDownloadURL('news');
  const [mdURL, getMdURL] = useDownloadURL('news');
  const [md, setMd] = useState<string>();

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'news', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as Blog;

        await Promise.all([
          getImageURL(data.bannerName),
          getMdURL(data.mdName),
        ]);

        if (mdURL)
          await fetch(mdURL)
            .then(res => res.text())
            .then(data => setMd(data));

        setBlog(data);
      }
    })();
  }, []);

  console.log(md);

  const { title, readMoreLink } = blog || {};

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

        <ExpoImage
          style={styles.thumbnail}
          source={imageURL}
          contentFit="cover"
          transition={240}
        />

        <View style={{ height: 32 }} />

        <View
          style={{
            paddingHorizontal: 32,
          }}
        >
          <Text style={styles.title}>{title}</Text>

          <Markdown styles={markdownStyles}>{md}</Markdown>

          <View style={{ paddingHorizontal: 32 }}></View>
        </View>

        {/* <Pressable> */}
        <View style={styles.cta}>
          <Text style={styles.ctaText}>Read More</Text>
        </View>
        {/* </Pressable> */}
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
  cta: {
    backgroundColor: theme.colors.lightBlue,
    width: 300,
    alignSelf: 'center',
    borderRadius: 300,
    // position: 'absolute',
    // bottom: 48,
    marginTop: 24,
    marginBottom: 48,
  },
  ctaText: {
    color: theme.colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

