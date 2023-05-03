import { useNavigation } from '@react-navigation/native';
import { icons } from 'images';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { theme } from 'utils/theme';

function TitleBar({
  title = 'Screen Title',
  hideGear = false,
}: {
  title: string;
  hideGear?: boolean;
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.barWrapper}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={icons.arrowLeftCircle}
          style={styles.backIcon}
          resizeMode="contain"
        />
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      {hideGear ? (
        <View style={styles.placeholder} />
      ) : (
        <Pressable onPress={() => navigation.navigate('Settings' as never)}>
          <Image
            source={icons.gear}
            style={styles.gearIcon}
            resizeMode="contain"
          />
        </Pressable>
      )}
    </View>
  );
}

export default TitleBar;

const styles = StyleSheet.create({
  barWrapper: {
    height: 80,
    width: '100%',
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 17,
    color: theme.colors.lightBlue,
    fontWeight: '500',
  },
  backButton: {},
  backIcon: {
    width: 24,
    height: 24,
  },
  gearIcon: {
    width: 30,
    height: 30,
  },
  placeholder: {
    width: 30,
    height: 30,
  },
});
