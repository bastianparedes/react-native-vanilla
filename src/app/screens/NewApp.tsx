import { NewAppScreen } from '@react-native/new-app-screen';
import { Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/navigation/Stack';

type Props = NativeStackScreenProps<RootStackParamList, 'NewApp'>;
export default function NewApp({ navigation }: Props) {
  return (
    <>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
      <NewAppScreen />
    </>
  );
}
