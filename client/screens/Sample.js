import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

export const Sample = ({ navigation }) => {
  return (
    <View>
      <Text>This is in first sample</Text>
      <Button
        title="Go to sample"
        onPress={() => navigation.navigate('Home', { screen: 'sample2' })}
      />
    </View>
  )
}
