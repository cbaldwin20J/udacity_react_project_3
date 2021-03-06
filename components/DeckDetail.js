// is the detail page for a specific deck

import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { DECKS_KEY, delete_deck } from '../utils/api'


export default class DeckDetail extends Component {

  // will delete the deck from AsyncStorage
  deleteDeck = () => {
    const title = this.props.navigation.state.params.title
    // accesses AsyncStorage
    delete_deck(title)
      .then(() => {
        // redirects to home page
        this.props.navigation.push('Home')
      })
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.bigText}>{this.props.navigation.state.params.title}</Text>
        <Text style={styles.smallText}>{this.props.navigation.state.params.card_total}</Text>

        <View>

          <TouchableOpacity style={[styles.button,{backgroundColor: '#FFF', borderColor: '#000', marginBottom: 20}]} onPress={() => this.props.navigation.push('AddCard', {deck_title: this.props.navigation.state.params.title, card_total: this.props.navigation.state.params.card_total },)}>
            <Text style={[styles.smallText, {color: '#000', marginTop: 20, marginBottom: 20}]} >Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button,{backgroundColor: '#000', borderColor: '#FFF'}]} onPress={() => this.props.navigation.push('StartQuiz',{isThereCards: this.props.navigation.state.params.card_total, title: this.props.navigation.state.params.title})}>
            <Text style={[styles.smallText, {color: '#FFF', marginTop: 20, marginBottom: 20}]} >Start Quiz</Text>
          </TouchableOpacity>

          <Text style={[styles.smallText, {color: '#FF0000', marginTop: 30}]} onPress={this.deleteDeck}>Delete Deck</Text>

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
    fontSize: 35,
    fontWeight: "bold",
  },
  smallText: {
    color: '#C0C0C0',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    borderWidth: 2,
    margin: 5,
    justifyContent: 'center',
    paddingRight: 60,
    paddingLeft: 60
  }
})
