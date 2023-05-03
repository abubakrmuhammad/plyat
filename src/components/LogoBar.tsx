import { PlyatLogoLightBlue, gearIcon, hamburgerIcon } from 'images';
import { StyleSheet, View, Image } from 'react-native';

function LogoBar() {
  return (
    <View style={styles.barWrapper}>
      <Image
        source={hamburgerIcon}
        style={styles.hamburgerIcon}
        resizeMode="contain"
      />

      <Image
        source={PlyatLogoLightBlue}
        style={styles.logo}
        resizeMode="contain"
      />

      <Image source={gearIcon} style={styles.gearIcon} resizeMode="contain" />
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
