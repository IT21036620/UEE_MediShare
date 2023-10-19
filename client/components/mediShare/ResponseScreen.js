import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ResponseScreen = ({ route }) => {
  const [message, setMessage] = useState('');

  // Extract the post ID passed from the MediShareScreen
  const { postId } = route.params;

  const handleSubmit = async () => {
    if (message.trim() === '') {
      alert('Please enter a message.');
      return;
    }

    // Here, you would typically send the message to your server/API
    // using something like axios.

    // This is a mock-up and does not include the API call
    console.log(`Sending response for post ${postId}: ${message}`);
    alert('Response submitted!');

    setMessage(''); // Clear the input field
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Respond to Post</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Type your response here..."
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Submit Response" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});

export default ResponseScreen;
