import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import axios from 'axios'

export default function AppointmentReminders({ navigation }) {
  const [appoinments, setAppoinments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://10.0.2.2:4000/api/v1/appointment/user/652f9f9bb85a626a7ccdbc68'
        )
        setAppoinments(response.data.appointment)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Appointment Reminders</Text>
      <TouchableOpacity
        style={styles.newReminderButton}
        onPress={() => navigation.navigate('AddNewReminder')}
      >
        <Text style={styles.newReminderText}>+ New Reminder</Text>
      </TouchableOpacity>

      <ScrollView style={styles.listContainer}>
        {appoinments.map((appointment, index) => (
          <View style={styles.reminderCard}>
            <Text style={styles.time}>{appointment.time}</Text>
            <Text style={styles.date}>{appointment.date.split('T')[0]}</Text>
            <Text style={styles.doctor}>{appointment.doctorName}</Text>
            <Text style={styles.specialty}>{appointment.doctorType}</Text>
            <Text style={styles.appointmentType}>{appointment.reason}</Text>
          </View>
        ))}
      </ScrollView>
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
