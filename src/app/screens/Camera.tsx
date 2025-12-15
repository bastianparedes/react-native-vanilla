import { useEffect } from 'react';
import { Text } from 'react-native';
import { View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/navigation/Stack';
/* import { useCameraPermission } from 'react-native-vision-camera' */

type Props = NativeStackScreenProps<RootStackParamList, 'Camera'>;

export function CameraScreen({ navigation }: Props) {
  /* const { hasPermission, requestPermission } = useCameraPermission(); */
  useEffect(() => {
    console.log('ayuda hasPermission');
  }, []);
  return (
    <View>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Text>Contenido de Home</Text>
    </View>
  );
}
