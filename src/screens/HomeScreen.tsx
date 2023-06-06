import ScreenWrapper from 'components/ScreenWrapper';
import LogoBar from 'components/LogoBar';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from 'components/SearchBar';
import { theme } from 'utils/theme';

function BigButton({
  imageURI,
  label,
  screenName,
  width = '50%',
}: {
  imageURI: string;
  label: string;
  screenName: string;
  width?: string;
}) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(screenName as never)}
      style={{ width }}
    >
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
    </Pressable>
  );
}

function HomeScreen() {
  return (
    <ScreenWrapper>
      <LogoBar />

      <View style={styles.screenWrapper}>
        <Text style={styles.subtitle}>Welcome, Comrade</Text>
        <Text style={styles.title}>Experience the {'\n'}Gaming World.</Text>

        {/* <SearchBar placeholder="Search Service" /> */}

        <View style={styles.buttonsWrapper}>
          <BigButton
            imageURI="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            label="Gaming Zones"
            screenName="GamingZones"
            width="100%"
          />
          {/* <BigButton
            imageURI="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            label="Show Map"
            screenName="Map"
          /> */}
          <BigButton
            imageURI="https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            label="Explore"
            screenName="Blogs"
          />
          <BigButton
            imageURI="https://images.unsplash.com/photo-1587095951604-b9d924a3fda0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            label="eSports"
            screenName="Tournaments"
          />
        </View>
      </View>
    </ScreenWrapper>
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
    color: theme.colors.lightBlue,
    fontWeight: '500',
    marginBottom: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: theme.colors.lightBlue,
    marginBottom: 32,
  },
  BigButton: {
    // width: '50%',
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

