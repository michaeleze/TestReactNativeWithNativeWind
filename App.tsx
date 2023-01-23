import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import SplashScreen from './src/screens/Splash';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white" >
      <SplashScreen />
      <Text>WELCOME</Text>
      <StatusBar style="auto" />
    </View >
  );
};
