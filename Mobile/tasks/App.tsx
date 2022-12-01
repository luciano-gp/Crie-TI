import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import ViewLogin from './src/screens/ViewLogin';
import ViewNewLogin from './src/screens/ViewNewLogin';
import ViewSkeleton from './src/screens/ViewSkeleton';
import ViewTasks from './src/screens/ViewTasks';
import ViewUsers from './src/screens/ViewUsers';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator } from 'react-native';

import { AppProvider } from './src/contexts/AppContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Light': require('./src/assets/fonts/Roboto-Light.ttf'),
    'Roboto-Black': require('./src/assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
  })
  if (fontsLoaded) {
    return (
      <AppProvider>
        <>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="ViewNewLogin" screenOptions={{ headerShown: false, animation: 'fade', }}>
              <Stack.Screen name="ViewLogin" component={ViewLogin} />
              <Stack.Screen name="ViewNewLogin" component={ViewNewLogin} />
              <Stack.Screen name="ViewSkeleton" component={ViewSkeleton} />
              <Stack.Screen name="ViewTasks" component={ViewTasks} />
              <Stack.Screen name="ViewUsers" component={ViewUsers} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar translucent={false} style="light" />
        </>
      </AppProvider>
    );
  } else {
    return (
      <ActivityIndicator size='large' color='#6AC66B' />
    );
  }
}