import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default ProfileScreen