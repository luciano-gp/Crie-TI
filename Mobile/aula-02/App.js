import { StatusBar } from 'expo-status-bar';
import ViewImages from './src/screens/ViewImages';
import ViewNav1 from './src/screens/ViewNav1';
import ViewPicker from './src/screens/ViewPicker';
import ViewState from './src/screens/ViewState';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade', }}>
          <Stack.Screen name="ViewNav1" component={ViewNav1} />
          <Stack.Screen name="ViewImages" component={ViewImages} />
          <Stack.Screen name="ViewState" component={ViewState} />
          <Stack.Screen name="ViewPicker" component={ViewPicker} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar translucent={false} style="light" />
    </>
  );
}