import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function MedicineRestock() {
  const [pills, setPills] = useState(1)
  const [medicineName, setMedicineName] = useState('')
  const [medicineMg, setMedicineMg] = useState('')
  const [expiryDate, setExpiryDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)

  const stockID = '6530f525a48b435634e2053c'

  const onDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      // Check if the date was selected
      if (selectedDate < new Date()) {
        Alert.alert('Error', 'Please select a valid expiry date in the future.')
      } else {
        setExpiryDate(selectedDate)
        setShowDatePicker(false)
      }
    } else {
      setShowDatePicker(false)
    }
  }

  useEffect(() => {
    const fetchMedicineData = async () => {
      try {
        const response = await axios.get(
          `http://10.0.2.2:4000/api/v1/stock/${stockID}`
        )
        const data = response.data
        setMedicineName(data.medicineName)
        setMedicineMg(data.dose)
        setPills(data.amount)
        setExpiryDate(new Date(data.exp)) // Assuming the date from API is in a format that's compatible with the JavaScript Date object
      } catch (error) {
        console.error('Error fetching medicine data:', error)
      }
    }

    fetchMedicineData()
  }, [])

  const updateMedicine = async () => {
    try {
      await axios.put(`http://localhost:4000/api/v1/stock/${stockID}`, {
        pills: dose,
        date: exp,
      })
      Alert.alert('Success', 'Stock updated successfully.')
    } catch (error) {
      console.error('Error updating medicine:', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Medicine</Text>

      <TextInput
        style={styles.input}
        placeholder="Medication Name"
        value={medicineName}
        editable={false} // Making this field readonly
      />

      <TextInput
        style={styles.input}
        placeholder="Medication mg"
        value={medicineMg}
        editable={false} // Making this field readonly
        keyboardType="number-pad"
      />

      <View style={styles.amountContainer}>
        <TouchableOpacity
          onPress={() => setPills(pills - 1)}
          style={styles.amountButton}
        >
          <Text>-</Text>
        </TouchableOpacity>

        <Text style={styles.pillsText}>{pills} pills</Text>

        <TouchableOpacity
          onPress={() => setPills(pills + 1)}
          style={styles.amountButton}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.input}>
            Expiry Date: {expiryDate.toDateString()}
          </Text>
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={expiryDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onDateChange}
          minimumDate={new Date()}
        />
      )}

      <TouchableOpacity style={styles.addButton} onPress={updateMedicine}>
        <Text style={styles.addButtonText}>Update</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  amountButton: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  pillsText: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',

    borderRadius: 10,
    marginBottom: 15,
  },
  addButton: {
    padding: 15,
    backgroundColor: '#6f93f2',
    borderRadius: 10,
    alignItems: 'center',
  },
})
