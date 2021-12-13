import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Landing from './src/screens/Landing';
import Confirmation from './src/screens/Confirmation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} options={ SplashScreen.hide(),{headerShown:false} } />
      <Stack.Screen name='SignUp' component={Signup} options={ SplashScreen.hide(),{headerShown:false} } />
      <Stack.Screen name='Landing' component={Landing} options={{headerShown:false}}/>
      <Stack.Screen name='Confirmation' component={Confirmation} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}