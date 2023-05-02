import ScreenWrapper from 'components/ScreenWrapper';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function GamingZonesScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <Text
        style={{
          color: '#fff',
          marginBottom: 20,
        }}
      >
        GamingZonesScreen
      </Text>

      <Button
        onPress={() => navigation.goBack()}
        title="Go Back"
        color="#8296F5"
      />
    </ScreenWrapper>
  );
}

export default GamingZonesScreen;
