import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './components/navigation/Stack';

import HomeScreen from './screens/Home';
import NewAppScreen from './screens/NewApp';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewApp" component={NewAppScreen} options={{ title: 'Nueva app' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
