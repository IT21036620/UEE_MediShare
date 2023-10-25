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
import DateTimePicker from '@react-native-community/datetimepicker'

export default function AddPrescriptionReminder() {
  const [medicationName, setMedicationName] = useState('')
  const [medicationMg, setMedicationMg] = useState('')
  const [pills, setPills] = useState(1)
  const [duration, setDuration] = useState('10 Days')
  const [reminderTime, setReminderTime] = useState('07:00')
  const [frequency, setFrequency] = useState('Daily')
  const [showTimePicker, setShowTimePicker] = useState(false)

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

  const onTimeChange = (event, selectedTime) => {
    if (event.type === 'set' && selectedTime) {
      const formattedTime = `${selectedTime.getHours()}.${selectedTime.getMinutes()}`
      setReminderTime(formattedTime)
    }
    setShowTimePicker(false)
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

      {/* <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.amountButton}>
          <Text>+</Text>
        </TouchableOpacity>
        <TextInput defaultValue="2 pills" style={styles.amountInput} />
        <TouchableOpacity style={styles.amountButton}>
          <Text>-</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.amountContainer}>
        <TouchableOpacity
          onPress={() => setPills(pills - 1)}
          style={styles.amountButton}
        >
          <Text>-</Text>
        </TouchableOpacity>

        <Text style={styles.pillsText}>{pills} pills</Text>

        <TouchableOpacity
          onPress={() => setPills(pills + 1)}
          style={styles.amountButton}
        >
          <Text>+</Text>
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
        <View style={styles.formGroup}>
          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            <Text style={styles.input}>Time: {reminderTime}</Text>
          </TouchableOpacity>

          {showTimePicker && (
            <DateTimePicker
              value={new Date()}
              mode="time"
              is24Hour={false}
              display={Platform.OS === 'android' ? 'default' : 'spinner'}
              onChange={onTimeChange}
            />
          )}
        </View>
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
  formGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    justifyContent: 'center',
    marginBottom: 15,
  },
  amountButton: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  pillsText: {
    marginHorizontal: 20,
    fontSize: 16,
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
  inputdate: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    width: '100%',
    height: '50',
    borderRadius: 10,
  },
})
