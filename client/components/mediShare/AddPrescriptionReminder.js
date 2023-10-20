import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native'
import axios from 'axios'

export default function AddPrescriptionReminder() {
  const [medicationName, setMedicationName] = useState('')
  const [medicationMg, setMedicationMg] = useState('')
  const [pillsAmount, setPillsAmount] = useState(2)
  const [duration, setDuration] = useState('10 Days')
  const [reminderTime, setReminderTime] = useState('07:00')
  const [frequency, setFrequency] = useState('Daily')

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:4000/api/v1/reminder',
        {
          user: '652f9f9bb85a626a7ccdbc68',
          medicationName: medicationName,
          dose: medicationMg,
          amount: pillsAmount,
          duration: duration,
          timeSlots: reminderTime,
          frequency: frequency,
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
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Prescription Reminders</Text>

      <TextInput
        placeholder="Medication Name"
        style={styles.input}
        value={medicationName}
        onChangeText={setMedicationName}
      />
      <TextInput
        placeholder="Medication mg"
        style={styles.input}
        value={medicationMg}
        onChangeText={setMedicationMg}
      />

      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.amountButton}>
          <Text>+</Text>
        </TouchableOpacity>
        <TextInput defaultValue="2 pills" style={styles.amountInput} />
        <TouchableOpacity style={styles.amountButton}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Duration"
        style={styles.input}
        defaultValue="10 Days"
        value={duration}
        onChangeText={setDuration}
      />

      <View style={styles.timeContainer}>
        <TextInput placeholder="07:00" style={styles.timeInput} />
        <TouchableOpacity style={styles.timeButton}>
          <Text>+ Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.frequencyContainer}>
        {['Daily', 'Weekly', 'Monthly'].map((freq) => (
          <TouchableOpacity
            key={freq}
            style={[
              styles.frequencyButton,
              freq === frequency ? styles.frequencyActive : {},
            ]}
            onPress={() => setFrequency(freq)}
          >
            <Text
              style={
                freq === frequency
                  ? styles.frequencyActiveText
                  : styles.frequencyText
              }
            >
              {freq}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Add Reminder</Text>
      </TouchableOpacity>
    </ScrollView>
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
  input: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  amountButton: {
    padding: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
  },
  amountInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  timeInput: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
})
