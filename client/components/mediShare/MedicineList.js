import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native'

const MedicineList = ({ navigation }) => {
  const [medicinelist, setMedicinelist] = useState([])

  useEffect(() => {
    fetchMedicinelist()
  }, [])

  const fetchMedicinelist = async () => {
    try {
      const response = await axios.get(
        'http://10.0.2.2:4000/api/v1/stock/user/652f9f9bb85a626a7ccdbc68'
      )
      if (response.data && response.data.stock) {
        setMedicinelist(response.data.stock)
      }
    } catch (error) {
      console.error('Error fetching Stock:', error)
    }
  }

  const handleDelete = (medicineId) => {
    Alert.alert(
      'Delete Medicine',
      'Are you sure you want to delete this medicine?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              const response = await axios.delete(
                `http://10.0.2.2:4000/api/v1/stock/${medicineId}`
              )
              if (response.status === 200) {
                // Removing the medicine from state after successful deletion
                setMedicinelist((prevList) =>
                  prevList.filter((medicine) => medicine._id !== medicineId)
                )
              }
            } catch (error) {
              console.error('Error deleting medicine:', error)
            }
          },
        },
      ],
      { cancelable: false }
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Medicine</Text>

      {/* Mapping over the medicinelist to render each medicine item */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {medicinelist.map((medicine, index) => (
          <View key={index} style={styles.medicineItem}>
            <View style={styles.detailsContainer}>
              <Text style={styles.medicineName}>{medicine.medicineName}</Text>
              <Text style={styles.medicineDetails}>{medicine.dose}</Text>
              <Text style={styles.medicineDetails}>{medicine.amount}</Text>
              <Text style={styles.medicineDetails}>
                Exp: {medicine.exp.split('T')[0]}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.restockButton}>
                <Text style={styles.restockText}>Restocked</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(medicine._id)}
              >
                <Text style={styles.icon}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.newReminderButton}
        onPress={() => navigation.navigate('AddNewMedicine')}
      >
        <Text style={styles.newReminderText}>+ Add New Medicine</Text>
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
    flexDirection: 'row', // added for horizontal alignment
    alignItems: 'center', // vertically center-align items
    justifyContent: 'space-between', // create space between elements
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#6f93f2',
  },
  newReminderButton: {
    backgroundColor: '#6f93f2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  newReminderText: {
    color: 'white',
    fontSize: 16,
  },
  medicineDetails: {
    flex: 1, // added to occupy full available width
    marginLeft: 10, // spacing between name and details
  },
  restockButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60, // Set a fixed width
    height: 60, // Set a fixed height
    borderRadius: 30, // Half of width/height to make it a circle
    backgroundColor: '#6f93f2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute', // Position it absolutely
    bottom: 20, // Position it 20 units from the bottom
    right: 20, // Position it 20 units from the right
    justifyContent: 'center',
  },

  restockText: {
    color: 'white',
    marginRight: 5, // spacing between text and icon
    fontSize: 16, // Adjust as per your needs
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 18,
    color: 'white',
  },
  medicineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailsContainer: {
    flex: 1,
    height: 90,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restockButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginRight: 10, // spacing between the two buttons
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
  deleteButton: {
    padding: 5,
  },
  icon: {
    fontSize: 18,
    color: 'red', // Making the delete icon red for emphasis
  },
})

export default MedicineList
