import React, { Component } from 'react'
// 'Platform' is for different style and icon options for ios and android
import { View, Text, StyleSheet } from 'react-native'


export default class DeleteDeck extends Component {

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.bigText}>Delete Deck Page</Text>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigText: {
    fontSize: 50,
    fontWeight: "bold",
  },
  smallText: {
    color: '#C0C0C0',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 50,
  },
})
