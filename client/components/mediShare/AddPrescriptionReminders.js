import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

export default function AddPrescriptionReminders() {
  const [frequency, setFrequency] = useState('Daily')

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Prescription Reminders</Text>

      <TextInput placeholder="Medication Name" style={styles.input} />
      <TextInput placeholder="Medication mg" style={styles.input} />

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

      <TouchableOpacity style={styles.submitButton}>
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
