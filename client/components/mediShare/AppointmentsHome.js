import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Appointments({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Appointments</Text>
      </View>

      <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('AppoinmentReminders')}>
        <Text style={styles.icon}>📋</Text>
        <Text style={styles.tileText}>Appointment Reminders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('AppoinmentReminders')}>
        <Text style={styles.icon}>💊</Text>
        <Text style={styles.tileText}>Medication History</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tile: {
    backgroundColor: '#f7f7f7',
    padding: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  tileText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
})
