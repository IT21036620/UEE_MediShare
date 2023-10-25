import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native'
import axios from 'axios'

const MedicineExpiry = ({ navigation }) => {
  const [medicine, setMedicine] = useState([])

  useEffect(() => {
    fetchMedicine()
  }, [])

  const fetchMedicine = async () => {
    try {
      const response = await axios.get(
        'http://10.0.2.2:4000/api/v1/stock/user/exp/652f9f9bb85a626a7ccdbc68'
      )
      if (response.data && response.data.stock) {
        setMedicine(response.data.stock)
      }
    } catch (error) {
      console.error('Error fetching Stock:', error)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {medicine.map((med, index) => (
          <View key={index} style={styles.medicineCard}>
            <Text style={styles.alertIcon}>⚠️</Text>
            <Text style={styles.medicineInfo}>
              Your {med.medicineName} is due on {med.exp}.
            </Text>
            {/* <Button
              title="Restocked"
              onPress={() =>
                navigation.navigate('MedicineRestock', { stockId: data._id })
              }
            /> */}
            <TouchableOpacity
              style={styles.restockButton}
              onPress={() =>
                navigation.navigate('MedicineRestock', {
                  stockId: med._id,
                })
              }
            >
              <Text style={styles.restockButtonText}>Restocked</Text>
            </TouchableOpacity>
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
  medicineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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

export default MedicineExpiry
