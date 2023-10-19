import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Another"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})