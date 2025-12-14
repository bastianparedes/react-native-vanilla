import { SafeAreaProvider} from 'react-native-safe-area-context';
import App from './App';


export default function RootApp() {

  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
