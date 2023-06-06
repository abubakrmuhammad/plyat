import ScreenWrapper from 'components/ScreenWrapper';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from 'components/SearchBar';
import TitleBar from 'components/TitleBar';
import { icons } from 'images';
import { theme } from 'utils/theme';

const items = [
  { title: 'Help Center', icon: icons.help },
  { title: 'Facebook', icon: icons.socials.facebook },
  { title: 'Twitter', icon: icons.socials.twitter },
  { title: 'Instagram', icon: icons.socials.twitter },
  { title: 'GitHub', icon: icons.socials.github },
  { title: 'Logout', icon: icons.logout },
];

function DrawerItem({ title, icon }: { title: string; icon: any }) {
  return (
    <View style={styles.settingsItem}>
      <View style={styles.settingsItemIcon}>
        <Image source={icon} style={{ width: '100%', height: '100%' }} />
      </View>

      <Text style={styles.settingsItemText}>{title}</Text>
    </View>
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
            <DrawerItem key={index} title={item.title} icon={item.icon} />
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

