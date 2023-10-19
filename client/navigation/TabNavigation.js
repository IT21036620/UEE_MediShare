import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home.js';
import StackNavigator from './StackNavigator.js';
// import Records from '../screens/Records.js';
// import Reminders from '../screens/Reminders.js';
// import MediShare from '../screens/MediShare.js';
// import Profile from '../screens/Profile.js';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Records"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="file-document" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Reminders"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="MediShare"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="account-group" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="account" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
