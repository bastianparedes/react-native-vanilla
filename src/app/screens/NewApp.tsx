import { NewAppScreen as NewApp } from '@react-native/new-app-screen';
import { Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/navigation/Stack';

type Props = NativeStackScreenProps<RootStackParamList, 'NewApp'>;
export function NewAppScreen({ navigation }: Props) {
  return (
    <>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
      <NewApp />
    </>
  );
}
