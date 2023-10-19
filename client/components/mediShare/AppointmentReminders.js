import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'

export default function AppointmentReminders() {
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
      <Text style={styles.header}>Appointment Reminders</Text>
      <TouchableOpacity style={styles.newReminderButton}>
        <Text style={styles.newReminderText}>+ New Reminder</Text>
      </TouchableOpacity>

      <FlatList
        data={reminders}
        renderItem={({ item }) => (
          <View style={styles.reminderCard}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.doctor}>{item.doctor}</Text>
            <Text style={styles.specialty}>{item.specialty}</Text>
            <Text style={styles.appointmentType}>{item.appointmentType}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
  newReminderButton: {
    backgroundColor: '#4C7DFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  newReminderText: {
    color: 'white',
    fontSize: 16,
  },
  reminderCard: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'column',
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
  },
  doctor: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  specialty: {
    fontSize: 14,
    marginBottom: 5,
  },
  appointmentType: {
    fontSize: 14,
    marginBottom: 5,
  },
})
