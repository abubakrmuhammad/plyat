import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  ActivityIndicator,
  Pressable,
  Image,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { theme } from 'utils/theme';
import BackButton from 'components/BackButton';
import { Blog, RootNavStackParamList } from 'utils/types';
import { useEffect, useState } from 'react';
import { useDownloadURL, useLoading } from 'utils/hooks';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'firebase/firebase';
import { Image as ExpoImage } from 'expo-image';

import * as Linking from 'expo-linking';
import Markdown from 'react-native-simple-markdown';
import { formatDate } from 'utils/helpers';
import { icons } from 'images';

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
  const [blog, setBlog] = useState<Blog>();
  const [imageURL, getImageURL] = useDownloadURL('news');
  const [mdURL, getMdURL] = useDownloadURL('news');
  const [md, setMd] = useState<string>();

  const [loading, loadingActions] = useLoading(false);

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      loadingActions.start();

      const docRef = doc(db, 'news', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as Blog;

        const [, mdURL] = await Promise.all([
          getImageURL(data.bannerName),
          getMdURL(data.mdName),
        ]);

        if (mdURL)
          await fetch(mdURL)
            .then(res => res.text())
            .then(data => setMd(data));

        setBlog(data);

        loadingActions.stop();
      }
    })();
  }, []);

  const { title, readMoreLink, publishedDate } = blog || {};

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
          {loading ? (
            <ActivityIndicator
              size="large"
              color={theme.colors.lightBlue}
              style={{ marginTop: 32 }}
            />
          ) : (
            <>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.date}>
                {formatDate(publishedDate?.toDate()!)}
              </Text>

              <Markdown styles={markdownStyles}>{md}</Markdown>

              <View style={{ paddingHorizontal: 32 }}></View>

              <Pressable
                onPress={async () => {
                  await Linking.openURL(readMoreLink!);
                }}
                disabled={!readMoreLink}
              >
                <View style={[styles.cta, !readMoreLink && styles.disabledCTA]}>
                  <Text style={styles.ctaText}>Read More</Text>

                  <Image
                    source={icons.externalLinkBlue}
                    style={{
                      height: 16,
                      width: 16,
                    }}
                  />
                </View>
              </Pressable>
            </>
          )}
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
  date: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,
    marginTop: 6,
    opacity: 0.7,
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
    marginTop: 24,
    marginBottom: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 4,
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

