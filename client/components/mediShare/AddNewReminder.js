import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import axios from 'axios'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function AddNewReminder() {
  const [appointmentReason, setAppointmentReason] = useState('')
  const [appointmentDate, setAppointmentDate] = useState(new Date())
  const [doctorName, setDoctorName] = useState('')
  const [doctorType, setDoctorType] = useState('')
  const [reminderTime, setReminderTime] = useState('8.00')
  const [showDatePicker, setShowDatePicker] = useState(false)

  const onDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      if (selectedDate < new Date()) {
        Alert.alert('Error', 'Please select a valid expiry date in the future.')
      } else {
        setAppointmentDate(selectedDate)
        setShowDatePicker(false)
      }
    } else {
      setShowDatePicker(false)
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:4000/api/v1/appointment',
        {
          user: '652f9f9bb85a626a7ccdbc68',
          reason: appointmentReason,
          date: appointmentDate,
          doctorName: doctorName,
          doctorType: doctorType,
          time: reminderTime,
        }
      )

      if (response.status === 200 || response.status === 201) {
        Alert.alert('Success', 'Reminder added successfully!')
      } else {
        Alert.alert('Error', 'Failed to add reminder.')
      }
    } catch (error) {
      Alert.alert('Error', 'There was an error adding the reminder.')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Reminder</Text>

      <View style={styles.formGroup}>
        <TextInput
          placeholder="Appointment Reason"
          style={styles.input}
          value={appointmentReason}
          onChangeText={setAppointmentReason}
        />
        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={styles.input}>
              Appointment Date: {appointmentDate.toDateString()}
            </Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={appointmentDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onDateChange}
            minimumDate={new Date()}
          />
        )}
      </View>

      <View style={styles.formGroup}>
        <TextInput
          placeholder="Doctor Name"
          style={styles.input}
          value={doctorName}
          onChangeText={setDoctorName}
        />
        <TextInput
          placeholder="Doctor Type"
          style={styles.input}
          value={doctorType}
          onChangeText={setDoctorType}
        />
      </View>

      <TextInput placeholder="Reminder Time" style={styles.inputSingle} />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
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
