import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native'
const backgroundImage = require('../../assets/Background.png')

const GetStartedScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {/* You can place other content/components here */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.createAccountButton}
            onPress={() => navigation.navigate('CreateAccountScreen')}
          >
            <Text style={styles.buttonText}>Create a Account</Text>
          </TouchableOpacity>
          <Text style={styles.signInText}>
            Already have an account ?
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.signLinkText}> Sign in</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between', // This will push content and buttons apart
  },
  content: {
    flex: 1,
    // Add other styles for your content here
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 'auto', // This will push the button container to the bottom
  },
  createAccountButton: {
    width: 300,
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A49D9',
  },
  signInText: {
    fontSize: 16,
    color: 'white',
  },
  signLinkText: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
})

export default GetStartedScreen
