import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { Sample2 } from '../screens/Sample2.js'
import AppoinmentReminders from '../components/mediShare/AppointmentReminders'
import AppointmentHome from '../components/mediShare/AppointmentsHome'
import AddNewReminder from '../components/mediShare/AddNewReminder'
import MedicationHistory from '../components/mediShare/MedicationHistory'
import Prescription from '../components/mediShare/Prescription'
import AddNewMedication from '../components/mediShare/AddNewMedication'

const Stack = createNativeStackNavigator()

function RecordNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AppointmentHome" component={AppointmentHome} />
      <Stack.Screen
        name="AppoinmentReminders"
        component={AppoinmentReminders}
      />
      <Stack.Screen name="AddNewReminder" component={AddNewReminder} />
      <Stack.Screen name="MedicationHistory" component={MedicationHistory} />
      <Stack.Screen name="Prescription" component={Prescription} />
      <Stack.Screen name="AddNewMedication" component={AddNewMedication} />
    </Stack.Navigator>
  )
}

export default RecordNavigator
