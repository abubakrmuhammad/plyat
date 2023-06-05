import { Image, StyleSheet, View, Text } from 'react-native';
import { theme } from 'utils/theme';
import { Image as ExpoImage } from 'expo-image';

function BLogCard({
  title,
  image,
  description,
}: {
  title: string;
  image: any;
  description: string;
}) {
  return (
    <View style={styles.cardWrapper}>
      <ExpoImage
        source={image}
        style={styles.image}
        contentFit="cover"
        transition={240}
      />

      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

export default BLogCard;

const styles = StyleSheet.create({
  cardWrapper: {
    overflow: 'hidden',
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 96,
    width: 96,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 14,
    overflow: 'hidden',
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  description: {
    color: theme.colors.white,
    fontSize: 11,
    fontWeight: '400',
    marginTop: 4,
  },
});

