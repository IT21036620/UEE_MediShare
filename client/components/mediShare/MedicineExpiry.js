import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function MedicineExpiry() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Medicine Expiry</Text>

      <View style={styles.medicineCard}>
        <Text style={styles.alertIcon}>⚠️</Text>
        <Text style={styles.medicineInfo}>
          Your, Asprin 25mg tablet is due on 25.09.2023
        </Text>
        <TouchableOpacity style={styles.restockButton}>
          <Text style={styles.restockButtonText}>Restocked</Text>
        </TouchableOpacity>
      </View>
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
  medicineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  alertIcon: {
    fontSize: 20,
    marginRight: 10,
    color: 'red',
  },
  medicineInfo: {
    flex: 1,
    color: '#333',
  },
  restockButton: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  restockButtonText: {
    color: 'white',
  },
})
