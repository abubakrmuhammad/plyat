import ScreenWrapper from 'components/ScreenWrapper';
import { View, Image, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import TitleBar from 'components/TitleBar';
import { icons } from 'images';
import { theme } from 'utils/theme';
import * as Linking from 'expo-linking';

const items = [
  {
    title: 'Help Center',
    icon: icons.help,
    link: 'https://github.com/abubakrmuhammad/plyat',
  },
  {
    title: 'Facebook',
    icon: icons.socials.facebook,
    link: 'https://www.facebook.com/bakrrrrrrrrrrrrrrrrrrrrrrrrrrr/',
  },
  {
    title: 'Twitter',
    icon: icons.socials.twitter,
    link: 'https://twitter.com/im_bakr_',
  },
  {
    title: 'Instagram',
    icon: icons.socials.instagram,
    link: 'https://www.instagram.com/bakrrrrrrrrrrrrrrrrrrrrrrrrrrr/',
  },
  {
    title: 'GitHub',
    icon: icons.socials.github,
    link: 'https://github.com/abubakrmuhammad',
  },
];

function DrawerItem({
  title,
  icon,
  link,
}: {
  title: string;
  icon: any;
  link: string;
}) {
  return (
    <Pressable onPress={() => Linking.openURL(link)}>
      <View style={styles.settingsItem}>
        <View style={styles.settingsItemIcon}>
          <Image source={icon} style={{ width: '100%', height: '100%' }} />
        </View>

        <Text style={styles.settingsItemText}>{title}</Text>
      </View>
    </Pressable>
  );
}

function DrawerScreen() {
  return (
    <ScreenWrapper>
      <TitleBar title="Settings" hideGear />

      <View style={styles.screenWrapper}>
        {/* <SearchBar placeholder="Search Settings" /> */}

        <ScrollView style={styles.cardsWrapper}>
          {items.map((item, index) => (
            <DrawerItem
              key={index}
              title={item.title}
              icon={item.icon}
              link={item.link}
            />
          ))}

          <View style={{ height: 32 }} />
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}

export default DrawerScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 24,
  },
  cardsWrapper: {
    flexDirection: 'column',
    gap: 10,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 24,
  },
  settingsItemIcon: {
    width: 28,
    height: 28,
    marginRight: 16,
  },
  settingsItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});
