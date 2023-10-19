import React from 'react'

function ProfileScreen() {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Go to Another"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

export default ProfileScreen