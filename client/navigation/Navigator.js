import React from 'react'
import TabNavigation from './TabNavigation'
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

export const Navigator = () => {
  return (
    <NavigationContainer>
    <TabNavigation/>
    {/* <StackNavigator/> */}
    </NavigationContainer>
  )
}
