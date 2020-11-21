import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export const AboutScreen = () => {
  return <View style={styles.center}>
    <Text>Hello!</Text>
  </View>

}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
