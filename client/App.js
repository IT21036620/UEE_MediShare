import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
} from 'react-native'

export default function App() {
  const reminders = [
    {
      time: '08:30 A.M',
      date: '28/09/2023',
      doctor: 'Dr. Kasun Perera',
      specialty: 'Endocrinologist',
      appointmentType: 'Diabetes Checkup',
    },
    {
      time: '11:30 A.M',
      date: '25/09/2023',
      doctor: 'Dr. Milyuru Nimesh',
      specialty: 'Dermatologist',
      appointmentType: 'Skin Treatment',
    },
    // ... add other reminders here
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Reminder</Text>

      <View style={styles.formGroup}>
        <TextInput placeholder="Appointment Reason" style={styles.input} />
        <TextInput placeholder="Appointment Date" style={styles.input} />
      </View>

      <View style={styles.formGroup}>
        <TextInput placeholder="Doctor Name" style={styles.input} />
        <TextInput placeholder="Doctor Type" style={styles.input} />
      </View>

      <TextInput placeholder="Reminder Time" style={styles.inputSingle} />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E5E5E5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    width: '48%',
    borderRadius: 10,
  },
  inputSingle: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: '#4C7DFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
})
