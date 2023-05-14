import { StyleSheet, View } from 'react-native';
import BackButton from './BackButton';
import SearchBar from './SearchBar';

function TopSearchBar() {
  return (
    <View style={styles.barWrapper}>
      <View style={styles.backButtonWrapper}>
        <BackButton size={24} />
      </View>

      <View style={styles.searchBarWrapper}>
        <SearchBar placeholder="Search News" />
      </View>
    </View>
  );
}

export default TopSearchBar;

const styles = StyleSheet.create({
  barWrapper: {
    height: 80,
    width: '100%',
    paddingHorizontal: 30,
    alignItems: 'center',

    flexDirection: 'row',
  },
  searchBarWrapper: {
    height: 40,
    flex: 1,
  },
  backButtonWrapper: {
    marginRight: 16,
  },
});

