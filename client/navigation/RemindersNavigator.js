import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RemindersHomeScreen from '../components/mediShare/RemindersHomeScreen.js'
import PrescriptionReminders from '../components/mediShare/PrescriptionReminders.js'
import Prescription from '../components/mediShare/Prescription.js'
import MedicineExpiry from '../components/mediShare/MedicineExpiry.js'
import MedicineList from '../components/mediShare/MedicineList.js'


const Stack = createNativeStackNavigator();

function RemindersNavigator() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name="RemindersHomeScreen" component={RemindersHomeScreen} />
        <Stack.Screen name="PrescriptionReminders" component={PrescriptionReminders} />
        <Stack.Screen name="MedicineExpiry" component={MedicineExpiry} />
        <Stack.Screen name="Prescription" component={Prescription} />
        <Stack.Screen name="MedicineList" component={MedicineList} />
      </Stack.Navigator>
  );
}

export default RemindersNavigator;