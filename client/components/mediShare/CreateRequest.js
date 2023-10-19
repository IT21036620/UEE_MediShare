import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export default function CreateRequest() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Requests</Text>

      <TextInput style={styles.inputField} placeholder="Medicine Name" />

      <TouchableOpacity style={styles.uploadBox}>
        <Text style={styles.uploadText}>Upload a Prescription</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send Request</Text>
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
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 50,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  uploadText: {
    color: 'gray',
  },
  sendButton: {
    backgroundColor: '#0066FF',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
})
