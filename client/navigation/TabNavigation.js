import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen.js';
import RecordNavigator from './RecordNavigator.js';
// import Records from '../screens/Records.js';
// import Reminders from '../screens/Reminders.js';
// import MediShare from '../screens/MediShare.js';
import Profile from '../screens/ProfileScreen.js';
import HomeNavigator from './HomeNavigator.js';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Records"
          component={RecordNavigator}
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
          component={Profile}
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