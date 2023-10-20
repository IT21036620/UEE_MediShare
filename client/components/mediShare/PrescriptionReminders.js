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

const Icon3 = require('../../assets/img/capsules.png')

export default function PrescriptionReminders() {
  const [reminders, setReminders] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://10.0.2.2:4000/api/v1/reminder/user/652f9f9bb85a626a7ccdbc68'
        )
        setReminders(response.data.reminder)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prescription Reminders</Text>

      <ScrollView style={styles.listContainer}>
        {reminders.map((reminder, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{reminder.timeSlots[0].time}</Text>

              <Text style={styles.dateText}>
                {reminder.date.split('T')[0]}, {reminder.frequency}
              </Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.rightSection}>
              <Text style={styles.takeText}>
                <Image source={Icon3} style={styles.icon} /> Take{' '}
                {reminder.amount} of {reminder.medicationName}
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.icon}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.repeatButton]}>
                  <Text>Repeat Never</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  timeContainer: {
    flex: 1,
  },
  icon: {
    width: 20, // Adjust as per your requirements
    height: 20, // Adjust as per your requirements
    marginBottom: 5,
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: 'gray',
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: 'gray',
    marginHorizontal: 10,
  },
  rightSection: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  takeText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  repeatButton: {
    marginLeft: 10,
    backgroundColor: '#6f93f2',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#6f93f2',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
  },
})
