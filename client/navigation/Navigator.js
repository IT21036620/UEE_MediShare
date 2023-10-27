import React from 'react'
import TabNavigation from './TabNavigation'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './RecordNavigator';
import SignIn from './../components/mediShare/SignIn'

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="MainApp" component={TabNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
