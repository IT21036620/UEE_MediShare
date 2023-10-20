import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Home from '../components/mediShare/Home';
import ProfileScreen from '../screens/ProfileScreen';
import { Sample } from '../screens/Sample';
import { Sample2 } from '../screens/Sample2';

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
      <Stack.Navigator >
        <Stack.Screen name="sample" component={Sample} />
        <Stack.Screen name="sample2" component={Sample2} />
      </Stack.Navigator>
  );
}

export default HomeNavigator;
