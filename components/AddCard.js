import React, { Component } from 'react'
// 'Platform' is for different style and icon options for ios and android
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { DECKS_KEY, add_card_to_deck } from '../utils/api'


export default class AddCard extends Component {

  state = {
    question_text: "",
    answer_text: ""
  }

  save_card_to_deck = () => {
    add_card_to_deck (this.props.navigation.state.params.deck_title, this.state.question_text, this.state.answer_text)
      .then(() => {
        this.props.navigation.push('Home')
      })


  }

  render() {

    return (
      <View style={styles.container}>


        <TextInput
        style={{padding: 5, height: 40, borderColor: 'gray', borderWidth: 1, margin: 15, marginTop: 40}}
        onChangeText={(question_text) => this.setState({question_text})}
        value={this.state.question_text}
        placeholder="question"
       />

        <TextInput
        style={{padding: 5, height: 40, borderColor: 'gray', borderWidth: 1, margin: 15, marginBottom: 60}}
        onChangeText={(answer_text) => this.setState({answer_text})}
        value={this.state.answer_text}
        placeholder="answer"
       />


        <TouchableOpacity style={[styles.button,{backgroundColor: '#000', borderColor: '#FFF'}]} onPress={this.save_card_to_deck}>
          <Text style={[styles.smallText, {color: '#FFF', marginTop: 20, marginBottom: 20}]} >Submit</Text>
        </TouchableOpacity>

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
  bigText: {
    fontSize: 50,
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
    margin: 30,
    justifyContent: 'center',
    paddingRight: 60,
    paddingLeft: 60
  }
})
