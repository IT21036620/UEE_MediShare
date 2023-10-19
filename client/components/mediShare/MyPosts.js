import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Button, Card } from 'react-native-elements'

export default function MyPosts() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Posts</Text>
        <Button title="+ New Request" buttonStyle={styles.newRequestButton} />
      </View>
      <View style={styles.dropdown}>
        <Text style={styles.dropdownText}>Most Recent ▼</Text>
      </View>

      <Card containerStyle={styles.card}>
        <Card.Title>Request to find the following Medicine</Card.Title>
        <Text style={styles.cardDescription}>
          Looking for a medicine called Acetaminophen. If you know where to find
          this medicine please contact me.
        </Text>
        <Image source={{ uri: 'URL_TO_IMAGE' }} style={styles.image} />
        <Text style={styles.dateTime}>22/09/2023 8:30 PM</Text>
        <Button title="Respond" buttonStyle={styles.respondButton} />
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  newRequestButton: {
    backgroundColor: '#4a90e2',
  },
  dropdown: {
    marginVertical: 15,
  },
  dropdownText: {
    color: '#4a4a4a',
    fontSize: 16,
  },
  card: {
    borderRadius: 10,
  },
  cardDescription: {
    marginBottom: 10,
    color: '#4a4a4a',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  dateTime: {
    color: '#9b9b9b',
    marginBottom: 10,
  },
  respondButton: {
    backgroundColor: '#4a90e2',
  },
})
