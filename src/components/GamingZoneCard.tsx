import { icons } from 'images';
import { Image, StyleSheet, View, Text } from 'react-native';
import { theme } from 'utils/theme';
import { GamingZone } from 'utils/types';
import { Image as ExpoImage } from 'expo-image';
import { useDownloadURL } from 'utils/hooks';
import { useEffect } from 'react';

function GamingZoneCard({ gamingZone }: { gamingZone: GamingZone }) {
  const { bannerName, name, isLiked } = gamingZone;
  const [imageURL, getImageURL] = useDownloadURL();

  useEffect(() => {
    getImageURL(bannerName);
  }, []);

  return (
    <View style={styles.shadowWrapper}>
      <View style={styles.cardWrapper}>
        <ExpoImage
          style={styles.image}
          source={imageURL}
          contentFit="cover"
          transition={240}
        />

        <View style={styles.bottomBar}>
          <Text style={styles.title}>{name}</Text>

          <View style={styles.controlsWrapper}>
            <Image
              source={isLiked ? icons.heartFilled : icons.heart}
              style={[styles.likeButton, styles.controlButton]}
              resizeMode="cover"
            />
            <Image
              source={icons.send}
              style={[styles.shareButton, styles.controlButton]}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default GamingZoneCard;

const styles = StyleSheet.create({
  shadowWrapper: {
    paddingHorizontal: 8,
  },
  cardWrapper: {
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: theme.colors.lightBlue,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 30,
    elevation: 8,
  },
  image: {
    height: 128,
    width: '100%',
    resizeMode: 'cover',
  },
  bottomBar: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.colors.blue,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    color: theme.colors.white,
    fontSize: 14,
  },
  controlsWrapper: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  controlButton: {
    height: 24,
    width: 24,
  },
  likeButton: {
    marginRight: 18,
  },
  shareButton: {},
});
