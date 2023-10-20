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

export default function Prescription() {
  const medicines = [
    {
      name: 'Metformin 500 mg',
      frequency: '1 Tablet 2 Times (Daily)',
      duration: '30 Days',
    },
    {
      name: 'Gliclazide 80 mg',
      frequency: '1 Tablet 1 Times (Daily)',
      duration: '30 Days',
    },
    // ... add other medicine entries here
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Prescription</Text>

      <FlatList
        data={medicines}
        renderItem={({ item }) => (
          <View style={styles.medicineCard}>
            <Text style={styles.medicineName}>{item.name}</Text>
            <Text style={styles.medicineFrequency}>{item.frequency}</Text>
            <Text style={styles.medicineDuration}>{item.duration}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.doctorInfo}>Dr. Kasun Perera</Text>
      <Text style={styles.specialty}>Endocrinologist</Text>
      <Text style={styles.dateInfo}>
        Start Date: 22/09/2023 End Date: 22/10/2023
      </Text>
      <Text style={styles.status}>Status: Ongoing</Text>

      <TextInput
        multiline
        placeholder="Notes & Effects..."
        style={styles.notesInput}
      />

      <Button title="Update" onPress={() => {}} />
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
    textAlign: 'center',
  },
  medicineCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  medicineName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  medicineFrequency: {
    fontSize: 14,
  },
  medicineDuration: {
    fontSize: 14,
  },
  doctorInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  specialty: {
    fontSize: 14,
    marginBottom: 10,
  },
  dateInfo: {
    fontSize: 14,
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notesInput: {
    height: 100,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
})
