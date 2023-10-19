import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const MedicationCard = ({ date, title, doctor, status }) => (
  <View style={styles.card}>
    <Text style={styles.date}>{date}</Text>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.doctorInfo}>
      <FontAwesome5 name="user-md" size={16} color="#2E8B57" />
      <Text style={styles.doctorName}> {doctor}</Text>
    </View>
    <TouchableOpacity style={styles.prescriptionButton}>
      <Text style={styles.prescriptionText}>Prescription</Text>
    </TouchableOpacity>
    <Text style={styles.status}>{status}</Text>
  </View>
)

export default function MedicationHistory() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Medication History</Text>
      <TouchableOpacity style={styles.newMedicationButton}>
        <Text style={styles.newMedicationText}>+ New Medication</Text>
      </TouchableOpacity>
      {/* Sample Medication Cards */}
      <MedicationCard
        date="22/09/2023"
        title="Diabetes Checkup"
        doctor="Dr. Kasun Perera"
        status="Ongoing"
      />
      <MedicationCard
        date="04/09/2023"
        title="Allergic Reaction"
        doctor="Dr. Rivindu Fernando"
        status="Effective"
      />
      {/* ... Add more cards as needed */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  newMedicationButton: {
    backgroundColor: '#0066FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  newMedicationText: {
    color: 'white',
    fontSize: 18,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  date: {
    color: '#7E7E7E',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  doctorName: {
    marginLeft: 5,
  },
  prescriptionButton: {
    backgroundColor: '#2E8B57',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  prescriptionText: {
    color: 'white',
  },
  status: {
    fontWeight: 'bold',
  },
})
