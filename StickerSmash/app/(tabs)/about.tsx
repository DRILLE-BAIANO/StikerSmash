import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Sobre</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#301934',
      justifyContent: 'center',
      alignItems: 'center'
  },
  text: {
      color: '#F2D2BD'
  }
})