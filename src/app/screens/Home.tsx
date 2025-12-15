import { Text } from 'react-native';
import { View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/navigation/Stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  return (
    <View>
      <Button
        title="Ir a Camera"
        onPress={() => navigation.navigate('Camera')}
      />
      <Text>Contenido de Home</Text>
    </View>
  );
}
