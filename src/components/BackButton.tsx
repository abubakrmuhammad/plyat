import { useNavigation } from '@react-navigation/native';
import { icons } from 'images';
import { Pressable, Image } from 'react-native';

function BackButton({ size = 24 }: { size?: number }) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Image
        source={icons.arrowLeftCircle}
        resizeMode="contain"
        style={{ width: size, height: size }}
      />
    </Pressable>
  );
}

export default BackButton;
