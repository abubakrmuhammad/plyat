import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import BlogDetailScreen from 'screens/BlogDetailScreen';
import BlogsScreen from 'screens/BlogsScreen';
import GamingZoneDetailScreen from 'screens/GamingZoneDetailScreen';
import GamingZonesScreen from 'screens/GamingZonesScreen';
import HomeScreen from 'screens/HomeScreen';
import DrawerScreen from 'screens/DrawerScreen';
import TournamentDetailScreen from 'screens/TournamentDetailScreen';
import TournamentsScreen from 'screens/TournamentsScreen';
import { RootNavStackParamList } from 'utils/types';

const Stack = createNativeStackNavigator<RootNavStackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="GamingZones"
            component={GamingZonesScreen}
            options={{ animation: 'fade_from_bottom' }}
          />
          <Stack.Screen
            name="Blogs"
            component={BlogsScreen}
            options={{ animation: 'fade_from_bottom' }}
          />
          <Stack.Screen
            name="Tournaments"
            component={TournamentsScreen}
            options={{ animation: 'fade_from_bottom' }}
          />
          <Stack.Screen
            name="GamingZoneDetail"
            component={GamingZoneDetailScreen}
            options={{ animation: 'fade_from_bottom' }}
          />
          <Stack.Screen
            name="BlogDetail"
            component={BlogDetailScreen}
            options={{ animation: 'fade_from_bottom' }}
          />
          <Stack.Screen
            name="TournamentDetail"
            component={TournamentDetailScreen}
            options={{ animation: 'fade_from_bottom' }}
          />
          <Stack.Screen
            name="Drawer"
            component={DrawerScreen}
            options={{ animation: 'slide_from_left' }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <ExpoStatusBar style="auto" />
    </>
  );
}

