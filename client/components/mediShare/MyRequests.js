import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

export default function MyRequests() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Requests</Text>

      <TouchableOpacity style={styles.newRequestButton}>
        <Text style={styles.newRequestButtonText}>+ New Request</Text>
      </TouchableOpacity>

      <ScrollView style={styles.requestsList}>
        <RequestItem
          name="Acetaminophen"
          date="22/09/2023 8.30 PM"
          status="Active"
          timeLeft="00:35:23"
        />
        <RequestItem
          name="Dengvaxia"
          date="26/05/2023 3.30 PM"
          status="Expired"
          timeLeft="00:00:00"
        />
        <RequestItem
          name="Amoxicillin"
          date="03/05/2023 3.30 PM"
          status="Expired"
          timeLeft="00:00:00"
        />
      </ScrollView>
    </View>
  )
}

function RequestItem({ name, date, status, timeLeft }) {
  return (
    <View style={styles.requestItem}>
      <Text style={styles.medicineName}>{name}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.status}>{status}</Text>
      <Text style={styles.timeLeft}>Request Expires in : {timeLeft}</Text>
      <TouchableOpacity style={styles.viewInfoButton}>
        <Text style={styles.viewInfoButtonText}>View Info</Text>
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
  newRequestButton: {
    backgroundColor: '#0066FF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  newRequestButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  requestsList: {
    flex: 1,
  },
  requestItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  medicineName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    marginBottom: 10,
  },
  status: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  timeLeft: {
    marginBottom: 10,
  },
  viewInfoButton: {
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  viewInfoButtonText: {
    fontSize: 14,
  },
})
