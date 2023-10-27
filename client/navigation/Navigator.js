import React from 'react'
import TabNavigation from './TabNavigation'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './RecordNavigator';
import SignIn from './../components/mediShare/SignIn'
import GetStartedScreen from '../components/GetStartPage/GetStartedScreen';
import CreateAccountScreen from '../components/GetStartPage/CreateAccountScreen';
import AccountDetails from '../components/GetStartPage/AccountDetails';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="GetStartedScreen">
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AccountDetails" component={AccountDetails} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={TabNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
