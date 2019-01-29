import React, { Component } from 'react'
// 'Platform' is for different style and icon options for ios and android
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'



export default class AllDecks extends Component {

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.bigText}>Deck 1</Text>
        <Text style={styles.smallText}>2 cards</Text>


        <Text style={styles.bigText}>Deck 2</Text>
        <Text style={styles.smallText}>5 cards</Text>


        <Text style={styles.bigText}>Deck 3</Text>
        <Text style={styles.smallText}>3 cards</Text>


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
