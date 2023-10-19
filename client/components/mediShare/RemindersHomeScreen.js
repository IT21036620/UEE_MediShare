import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Icon1 = require('../../assets/img/clipboard-prescription.png')
const Icon2 = require('../../assets/img/calendar-clock.png')
const Icon3 = require('../../assets/img/capsules.png')

export default function RemindersHomeScreen() {
  const navigation = useNavigation();

  const navigateToPrescriptionReminders = () => {
    navigation.navigate('PrescriptionReminders');
  };

  const navigateToMedicineExpiryAlerts = () => {
    // Navigate to the appropriate screen for Medicine Expiry Alerts
    // You should replace 'ScreenName' with the actual screen name.
    navigation.navigate('MedicineExpiry');
  };

  const navigateToMedicine = () => {
    // Navigate to the appropriate screen for Medicine
    // You should replace 'ScreenName' with the actual screen name.
    navigation.navigate('MedicineList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminders</Text>

      <TouchableOpacity style={styles.button} onPress={navigateToPrescriptionReminders}>
        <Image source={Icon1} style={styles.icon} />
        <Text style={styles.buttonText}>Prescription Reminders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToMedicineExpiryAlerts}>
        <Image source={Icon2} style={styles.icon} />
        <Text style={styles.buttonText}>Medicine Expiry Alerts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToMedicine}>
        <Image source={Icon3} style={styles.icon} />
        <Text style={styles.buttonText}>Medicine</Text>
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
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {
    marginRight: 20,
    width: 24, // or any desired size
    height: 24, // or any desired size
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
  },
})
