import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} options={ SplashScreen.hide(),{headerShown:false} } />
      <Stack.Screen name='SignUp' component={Signup} options={ SplashScreen.hide(),{headerShown:false} } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}