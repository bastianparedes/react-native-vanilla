// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import Stack from './components/navigation/RootStack';

import HomeScreen from './screens/Home';
import NewAppScreen from './screens/NewApp';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="NewApp" component={NewAppScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
