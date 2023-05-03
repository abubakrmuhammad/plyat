import { icons } from 'images';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import { theme } from 'utils/theme';

function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <View style={styles.searchInputWrapper}>
      <Image source={icons.search} style={styles.searchIcon} />
      <TextInput
        placeholder={placeholder}
        style={styles.searchInput}
        placeholderTextColor={theme.colors.white}
      />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  searchInputWrapper: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: 14,
    top: 4,
    width: 24,
    height: 24,
  },
  searchInput: {
    borderRadius: 100,
    height: 36,
    backgroundColor: 'rgba(130, 150, 245, 0.5)',
    paddingHorizontal: 24,
    paddingLeft: 52,
    marginBottom: 48,
    color: theme.colors.white,
  },
});
