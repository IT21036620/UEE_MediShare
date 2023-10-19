import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

export const Sample2 = ({ navigation }) => {
  return (
    <View>
      <Text>This is in sample 2</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}