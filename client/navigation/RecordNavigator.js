import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Sample2 } from '../screens/Sample2.js';

const Stack = createNativeStackNavigator();

function RecordNavigator() {
  return (
      <Stack.Navigator >
        <Stack.Screen name="sample2" component={Sample2} />
      </Stack.Navigator>
  );
}

export default RecordNavigator;
