import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './App';
import { useColorScheme, StatusBar } from 'react-native';


export default function RootApp() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <App />
    </SafeAreaProvider>
  );
}
