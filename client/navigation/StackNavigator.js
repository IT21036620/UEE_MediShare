import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator initialRouteName="Home"> {/* Set initialRouteName to "Home" */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    // <View>
    //   <Text>Home</Text>
    // </View>
  );
}

export default StackNavigator;
