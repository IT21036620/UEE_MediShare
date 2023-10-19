import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function MediShare() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MediShare</Text>
      <TouchableOpacity style={styles.myPostsButton}>
        <Text style={styles.myPostsButtonText}>My posts</Text>
      </TouchableOpacity>
      <Text style={styles.subHeader}>
        Request to find the following Medicine
      </Text>
      <Text style={styles.description}>
        Looking for a medicine called Acetaminophen. If you know where to find
        this medicine please contact me.
      </Text>
      <Image
        source={{ uri: 'your_image_link_here' }}
        style={styles.prescriptionImage}
      />
      <Text style={styles.date}>22/09/2023</Text>
      <Text style={styles.userName}>Ayesha de Silva</Text>
      <Text style={styles.time}>8.30 PM</Text>
      <TouchableOpacity style={styles.respondButton}>
        <Text style={styles.respondButtonText}>Respond</Text>
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
    textAlign: 'center',
    marginBottom: 10,
  },
  myPostsButton: {
    backgroundColor: '#0066FF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  myPostsButtonText: {
    color: 'white',
    fontSize: 16,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  prescriptionImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: '#7E7E7E',
    marginBottom: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#7E7E7E',
    marginBottom: 15,
  },
  respondButton: {
    backgroundColor: '#0066FF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  respondButtonText: {
    color: 'white',
    fontSize: 18,
  },
})
