import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

export default function PrescriptionReminders() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prescription Reminders</Text>

      <ScrollView style={styles.listContainer}>
        {['08:00 a.m.', '10:00 a.m.', '09:00 p.m.', '09:30 p.m.'].map(
          (time, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.timeText}>{time}</Text>
              <Text style={styles.medicineText}>Take some medicine</Text>
              <Text style={styles.dateText}>Today, Daily</Text>
              {/* You can replace the below Text with Icons */}
              <Text style={styles.iconPlaceholder}>Icon1</Text>
              <Text style={styles.iconPlaceholder}>Icon2</Text>
            </View>
          )
        )}
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
  timeText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  medicineText: {
    flex: 2,
    fontSize: 16,
  },
  dateText: {
    flex: 2,
    fontSize: 14,
    color: 'gray',
  },
  iconPlaceholder: {
    margin: 5,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#0066FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    color: 'white',
  },
})
