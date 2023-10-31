import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Icon1 = require('../../assets/img/clipboard-prescription.png')
const Icon2 = require('../../assets/img/calendar-clock.png')
const Icon3 = require('../../assets/img/capsules.png')

export default function RemindersHomeScreen() {
  const navigation = useNavigation()

  const navigateToPrescriptionReminders = () => {
    navigation.navigate('PrescriptionReminders')
  }

  const navigateToMedicineExpiryAlerts = () => {
    // Navigate to the appropriate screen for Medicine Expiry Alerts
    // You should replace 'ScreenName' with the actual screen name.
    navigation.navigate('MedicineExpiry')
  }

  const navigateToMedicine = () => {
    // Navigate to the appropriate screen for Medicine
    // You should replace 'ScreenName' with the actual screen name.
    navigation.navigate('MedicineList')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REMINDERS</Text>

      <TouchableOpacity
        style={styles.tile}
        onPress={navigateToPrescriptionReminders}
      >
        <Image source={Icon1} style={styles.icon} />
        <Text style={styles.tileText}>Prescription Reminders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tile}
        onPress={navigateToMedicineExpiryAlerts}
      >
        <Image source={Icon2} style={styles.icon} />
        <Text style={styles.tileText}>Medicine Expiry Alerts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={navigateToMedicine}>
        <Image source={Icon3} style={styles.icon} />
        <Text style={styles.tileText}>Medicine</Text>
      </TouchableOpacity>

      {/* <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.halfButton]}
          onPress={navigateToPrescriptionReminders}
        >
          <Image source={Icon1} style={styles.icon} />
          <Text style={styles.buttonText}>Prescription Reminders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.halfButton]}
          onPress={navigateToMedicineExpiryAlerts}
        >
          <Image source={Icon2} style={styles.icon} />
          <Text style={styles.buttonText}>Medicine Expiry Alerts</Text>
        </TouchableOpacity>
      </View> */}

      {/* <View style={styles.centerButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToMedicine}>
          <Image source={Icon3} style={styles.icon} />
          <Text style={styles.buttonText}>Medicine</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 5,
  },
  tile: {
    backgroundColor: '#6f93f2',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    height: 140,
    width: 340,
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  tileText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center', // This ensures the content stays centered
    paddingVertical: 20,
    paddingHorizontal: 40, // Adjust padding as per your requirements
    borderRadius: 10, // Assuming a slight rounding of corners
    backgroundColor: '#4CAF50', // Sample color
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
    backgroundColor: '#6f93f2',
    margin: 5,
    height: 140,
  },
  halfButton: {
    flex: 0.48,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  icon: {
    width: 60, // Adjust as per your requirements
    height: 60, // Adjust as per your requirements
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  centerButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
})
