import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default function MedicineScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Medicine</Text>

      {/** Medicine Item 1 */}
      <View style={styles.medicineItem}>
        <Text style={styles.medicineName}>Aspirin</Text>
        <Text style={styles.medicineDetails}>10 mg</Text>
        <Text style={styles.medicineDetails}>11 tablets</Text>
        <Text style={styles.medicineDetails}>Exp: 28.09.2023</Text>
        <TouchableOpacity style={styles.restockButton}>
          <Text style={styles.restockText}>Restocked</Text>
          <Text style={styles.icon}>🗑️</Text>
        </TouchableOpacity>
      </View>

      {/** Medicine Item 2 */}
      <View style={styles.medicineItem}>
        <Text style={styles.medicineName}>Betaloc</Text>
        <Text style={styles.medicineDetails}>10 mg</Text>
        <Text style={styles.medicineDetails}>11 tablets</Text>
        <Text style={styles.medicineDetails}>Exp: 28.09.2023</Text>
        <TouchableOpacity style={styles.restockButton}>
          <Text style={styles.restockText}>Restocked</Text>
          <Text style={styles.icon}>🗑️</Text>
        </TouchableOpacity>
      </View>

      {/** Bottom Restocked Button */}
      <TouchableOpacity style={styles.mainRestockButton}>
        <Text style={styles.mainRestockText}>Restocked</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  medicineItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
})
