import React, { Component } from 'react'
// 'Platform' is for different style and icon options for ios and android
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'











export default class AllDecks extends Component {

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.bigText} onPress={() => this.props.navigation.navigate('Detail')}>Deck 1</Text>
        <Text style={styles.smallText}>2 cards</Text>


        <Text style={styles.bigText}>Deck 2</Text>
        <Text style={styles.smallText}>5 cards</Text>


        <Text style={styles.bigText}>Deck 4</Text>
        <Text style={styles.smallText}>3 cards</Text>

        <View>
          <Text style={styles.smallText} onPress={() => this.props.navigation.navigate('Home')}>All Decks</Text>
          <Text style={styles.smallText} onPress={() => this.props.navigation.navigate('AddDeck')}>Add New Deck</Text>
        </View>


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
