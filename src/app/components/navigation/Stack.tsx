import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  NewApp: undefined;
  Profile: { userId: number };
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
