import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RemindersHomeScreen from '../components/mediShare/RemindersHomeScreen.js'
import PrescriptionReminders from '../components/mediShare/PrescriptionReminders.js'
import Prescription from '../components/mediShare/Prescription.js'
import MedicineExpiry from '../components/mediShare/MedicineExpiry.js'
import MedicineList from '../components/mediShare/MedicineList.js'
import AddNewMedicine from '../components/mediShare/AddNewMedicine.js'
import MedicineRestock from '../components/mediShare/MedicineRestock.js'
import AddPrescriptionReminder from '../components/mediShare/AddPrescriptionReminder.js'

const Stack = createNativeStackNavigator()

function RemindersNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="RemindersHomeScreen"
        component={RemindersHomeScreen}
      />
      <Stack.Screen
        name="PrescriptionReminders"
        component={PrescriptionReminders}
      />
      <Stack.Screen name="MedicineExpiry" component={MedicineExpiry} />
      <Stack.Screen name="Prescription" component={Prescription} />
      <Stack.Screen name="MedicineList" component={MedicineList} />
      <Stack.Screen name="AddNewMedicine" component={AddNewMedicine} />
      <Stack.Screen name="MedicineRestock" component={MedicineRestock} />
      <Stack.Screen
        name="AddPrescriptionReminder"
        component={AddPrescriptionReminder}
      />
    </Stack.Navigator>
  )
}

export default RemindersNavigator
