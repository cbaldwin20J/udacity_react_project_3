import React, { Component } from 'react'
// 'Platform' is for different style and icon options for ios and android
import { View, TouchableOpacity, Text, StyleSheet, Platform, ScrollView } from 'react-native'











export default class AllDecks extends Component {

  render() {

    return (
      <ScrollView >

        <Text style={styles.bigText} onPress={() => this.props.navigation.navigate('Detail')}>Deck 1</Text>
        <Text style={styles.smallText}>2 cards</Text>


        <Text style={styles.bigText}>Deck 2</Text>
        <Text style={styles.smallText}>5 cards</Text>




        <View style={styles.menuContainer}>
          <Text style={styles.extraSmallText} onPress={() => this.props.navigation.navigate('Home')}>All Decks</Text>
          <Text style={styles.extraSmallText} onPress={() => this.props.navigation.navigate('AddDeck')}>Add Deck</Text>
        </View>


      </ScrollView>
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
  menuContainer: {
    flex: 1,
    backgroundColor: '#EDEDFC',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
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
  extraSmallText: {
    color: '#C0C0C0',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 50,
  }
})
