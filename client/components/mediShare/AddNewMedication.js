import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export default function AddNewMedication() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Medication</Text>

      <View style={styles.formGroup}>
        <TextInput placeholder="Treatment Reason" style={styles.input} />
        <TextInput placeholder="Treatment Start Date" style={styles.input} />
      </View>

      <View style={styles.formGroup}>
        <TextInput placeholder="Doctor Name" style={styles.input} />
        <TextInput placeholder="Doctor Type" style={styles.input} />
      </View>

      <TextInput placeholder="Treatment End Date" style={styles.input} />

      <Text style={styles.subHeader}>Prescription</Text>
      <View style={styles.formGroup}>
        <TextInput placeholder="Medicine" style={styles.input} />
        <TextInput placeholder="Medicine Dose" style={styles.input} />
      </View>

      <View style={styles.formGroup}>
        <TextInput placeholder="Dosage Quantity" style={styles.input} />
        <TextInput placeholder="Frequency" style={styles.input} />
      </View>

      <View style={styles.formGroup}>
        <TextInput placeholder="Frequency Interval" style={styles.input} />
        <TextInput placeholder="Duration" style={styles.input} />
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add medicines one by one +</Text>
      </TouchableOpacity>

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
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
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
  addButton: {
    backgroundColor: '#D5D5D5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#4C7DFF',
    fontSize: 16,
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
