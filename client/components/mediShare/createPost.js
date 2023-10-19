import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Post</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Request Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.inputField, { height: 100 }]}
        placeholder="Request Details"
        value={details}
        onChangeText={setDetails}
        multiline
      />
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload a Prescription</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createPostButton}>
        <Text style={styles.createPostButtonText}>Create Post</Text>
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
    marginBottom: 20,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#7E7E7E',
    fontSize: 16,
  },
  createPostButton: {
    backgroundColor: '#0066FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  createPostButtonText: {
    color: 'white',
    fontSize: 18,
  },
})
