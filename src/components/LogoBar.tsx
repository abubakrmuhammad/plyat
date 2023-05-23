import { useNavigation } from '@react-navigation/native';
import { icons, logos } from 'images';
import { StyleSheet, View, Image, Pressable } from 'react-native';

function LogoBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.barWrapper}>
      <Pressable onPress={() => navigation.navigate('Drawer' as never)}>
        <Image
          source={icons.hamburger}
          style={styles.hamburgerIcon}
          resizeMode="contain"
        />
      </Pressable>

      <Image
        source={logos.plyatLightBlue}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* <Pressable onPress={() => navigation.navigate('Settings' as never)}>
        <Image
          source={icons.gear}
          style={styles.gearIcon}
          resizeMode="contain"
        />
      </Pressable> */}

      <View style={styles.gearIcon} />
    </View>
  );
}

export default LogoBar;

const styles = StyleSheet.create({
  barWrapper: {
    height: 80,
    width: '100%',
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {
    width: 120,
    height: 60,
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
  },
  gearIcon: {
    width: 30,
    height: 30,
  },
});
