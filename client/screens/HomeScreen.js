import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My Medical App</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({})