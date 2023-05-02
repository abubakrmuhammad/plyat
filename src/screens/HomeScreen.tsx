import TopBar from 'components/TopBar';
import { LinearGradient } from 'expo-linear-gradient';
import { searchIcon } from 'images';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';

function BigButton({ imageURI, label }: { imageURI: string; label: string }) {
  return (
    <View style={styles.BigButton}>
      <ImageBackground
        source={{ uri: imageURI }}
        resizeMode="cover"
        style={styles.image}
      >
        <LinearGradient
          colors={['transparent', 'rgba(130, 150, 245, 0.9)']}
          locations={[0, 0.9]}
          style={{ height: '100%' }}
        >
          <Text style={styles.label}>{label}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

function HomeScreen() {
  return (
    <>
      <TopBar />

      <View style={styles.screenWrapper}>
        <Text style={styles.subtitle}>Welcome, Rahim</Text>
        <Text style={styles.title}>Experience the {'\n'}Gaming World.</Text>

        <View style={styles.searchInputWrapper}>
          <Image source={searchIcon} style={styles.searchIcon} />
          <TextInput
            placeholder="Search Service"
            style={styles.searchInput}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.buttonsWrapper}>
          <BigButton
            imageURI="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            label="Gaming Zones"
          />
          <BigButton
            imageURI="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            label="Show Map"
          />
          <BigButton
            imageURI="https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            label="Explore"
          />
          <BigButton
            imageURI="https://images.unsplash.com/photo-1587095951604-b9d924a3fda0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            label="eSports"
          />
        </View>
      </View>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 24,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subtitle: {
    fontSize: 24,
    color: '#8296F5',
    fontWeight: '500',
    marginBottom: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#8296F5',
    marginBottom: 32,
  },
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
    color: '#fff',
  },
  BigButton: {
    width: '50%',
    padding: 10,
    height: 160,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  label: {
    color: '#0B102C',
    textAlign: 'center',
    marginTop: 'auto',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 12,
  },
});
