import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput, AsyncStorage } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

import {DECKS_KEY, saveDeckTitle, getDecks} from '../utils/api'




export default class AddDeck extends Component {

  state={
      deck_title: ""
    }

  save_deck_title = () => {
    console.log("***************this.state.deck_title: " + this.state.deck_title)
    if(this.state){
      saveDeckTitle(this.state.deck_title)
        .then(() => {
          this.props.navigation.push('Home')
        })





    }

  }

  render() {

    return (
      <View style={styles.container}>


        <Text style={[styles.bigText, {alignSelf: 'center'}]}>What is the title of your new deck?</Text>

        <TextInput
        style={{padding: 5, height: 40, borderColor: 'gray', borderWidth: 1, margin: 15, marginTop: 40}}
        onChangeText={(deck_title) => this.setState({deck_title})}
        value={this.state.deck_title}
        placeholder="deck title"
       />

       <TouchableOpacity style={[styles.button,{backgroundColor: '#000', borderColor: '#FFF', padding: 15, margin: 80}]} onPress={this.save_deck_title}>
         <Text style={[styles.smallText, {color: '#FFF'}]} >Create Deck</Text>
       </TouchableOpacity>


        <View style={styles.menuContainer}>

          <TouchableOpacity style={[styles.button, {flex: 1, backgroundColor: '#EDEDFC', borderColor: '#D2D2DC', borderWidth: 2, padding: 4} ]} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.extraSmallText}>All Decks</Text>
            <Icon
              name="ios-add"
              color="#ccc"
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {flex: 1, backgroundColor: '#EDEDFC', borderColor: '#D2D2DC', borderWidth: 2, padding: 4} ]} onPress={() => this.props.navigation.navigate('AddDeck')}>
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
    alignItems: 'stretch',

  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },
  bigText: {
    fontSize: 35,
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
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
