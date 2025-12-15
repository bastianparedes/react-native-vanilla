import { useEffect } from 'react';
import { Text } from 'react-native';
import { View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/navigation/Stack';
import { useCameraPermission, useCameraDevice, Camera } from 'react-native-vision-camera'

type Props = NativeStackScreenProps<RootStackParamList, 'Camera'>;

export function CameraScreen({ navigation }: Props) {
  const device = useCameraDevice('front')
  const { hasPermission, requestPermission } = useCameraPermission();
  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!hasPermission) return (
    <View>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Text>Contenido de Camera</Text>
      <Text>User has permission {String(hasPermission)}</Text>
    </View>
  );

  if (!device) return (
    <View>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Text>Contenido de Camera</Text>
      <Text>User has permission {String(hasPermission)}</Text>
    </View>
  );

  /* return <Text>A punto de mostrar camara</Text>; */

  return <Camera
    /* style={StyleSheet.absoluteFill} */
    device={device}
    isActive={true}
  />
}
