import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MediShare from '../components/mediShare/MediShare.js'
import Myposts from '../components/mediShare/MyPosts.js'
import ResponseScreen from '../components/mediShare/ResponseScreen.js';


const Stack = createNativeStackNavigator();

function MediShareNavigator() {
  return (
      <Stack.Navigator screenOptions={{
        headerTitleAlign:'center'
      }}>
        <Stack.Screen name="MediShare" component={MediShare} />
        <Stack.Screen name="Myposts" component={Myposts} />
        <Stack.Screen name="ResponseScreen" component={ResponseScreen} />
      </Stack.Navigator>
  );
}

export default MediShareNavigator;