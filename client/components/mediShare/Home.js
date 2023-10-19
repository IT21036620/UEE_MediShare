import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>📍 Moratuwa</Text>
      <Text style={styles.greeting}>Good Morning Ayesha,</Text>

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('./path/to/icon1.png')} style={styles.icon} />
          <Text>Medicine Availability Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('./path/to/icon2.png')} style={styles.icon} />
          <Text>Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('./path/to/icon3.png')} style={styles.icon} />
          <Text>Set Reminders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('./path/to/icon4.png')} style={styles.icon} />
          <Text>MediShare</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  location: {
    fontSize: 18,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: '45%', // approx. 2 items per row
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
})

export default Home
