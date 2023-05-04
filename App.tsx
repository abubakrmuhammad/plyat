import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import GamingZoneDetailScreen from 'screens/GamingZoneDetailScreen';
import GamingZonesScreen from 'screens/GamingZonesScreen';
import HomeScreen from 'screens/HomeScreen';
import SettingsScreen from 'screens/SettingsScreen';

const Stack = createNativeStackNavigator();

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
            name="GamingZoneDetail"
            component={GamingZoneDetailScreen}
            options={{ animation: 'fade_from_bottom' }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ animation: 'slide_from_right' }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <ExpoStatusBar style="auto" />
    </>
  );
}
