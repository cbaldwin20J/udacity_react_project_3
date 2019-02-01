import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";



export default class AllDecks extends Component {

  render() {
    console.log("*****************************hello")
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1 }}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
          <Text style={styles.bigText} >Deck 1</Text>
          <Text style={styles.smallText}>2 cards</Text>
        </ TouchableOpacity>

        <Text style={styles.bigText}>Deck 2</Text>
        <Text style={styles.smallText}>5 cards</Text>

      </ScrollView>


        <View style={styles.menuContainer}>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.extraSmallText}>All Decks</Text>
            <Icon
              name="ios-add"
              color="#ccc"
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddDeck')}>
            <Text style={styles.extraSmallText}>Add New Deck</Text>
            <Icon
              name="ios-albums"
              color="#ccc"
              size={25}
            />
          </TouchableOpacity>

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
    justifyContent: 'center'
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },
  bigText: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 50
  },
  smallText: {
    color: '#C0C0C0',
    fontSize: 20,
    textAlign: 'center'
  },
  extraSmallText: {
    color: '#C0C0C0',
    fontSize: 12,
    textAlign: 'center'
  },
  button: {
    flex: 1,
    backgroundColor: '#EDEDFC',
    borderColor: '#D2D2DC',
    borderWidth: 2,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4
  }
})
