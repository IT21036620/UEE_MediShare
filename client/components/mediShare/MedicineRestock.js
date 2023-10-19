import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export default function MedicineRestock() {
  const [pills, setPills] = useState(2)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Medicine Restock</Text>

      <TextInput
        style={styles.input}
        placeholder="Medication Name"
        defaultValue="Betaloc"
      />

      <TextInput
        style={styles.input}
        placeholder="Medication mg"
        defaultValue="25 mg"
        keyboardType="number-pad"
      />

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

      <View style={styles.dateContainer}>
        <TextInput
          style={styles.input}
          placeholder="Expire Date"
          defaultValue="23.09.2023"
        />
        <Text style={styles.calendarIcon}>📅</Text>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
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
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  calendarIcon: {
    fontSize: 20,
  },
  addButton: {
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    alignItems: 'center',
  },
})
