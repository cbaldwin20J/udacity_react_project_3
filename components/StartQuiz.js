// this is the quiz page. The whole quiz cycle is written here

import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity,  TextInput } from 'react-native'

import { DECKS_KEY, getDeck } from '../utils/api'
import { clearLocalNotification, setLocalNotification } from '../utils/notification'


export default class StartQuiz extends Component {

  state = {
    // this will be an array of the card's questions and answers
    is_there_cards: null,
    // how many cards this deck has
    card_count: null,
    which_card_are_we_on: 0,
    // there is a question side and an answer side
    which_side: "question",
    // the user's input answer
    answer_text: "",
    questions_correct: 0,
    finished: null,
    // user starts with 0 incorrect
    incorrect: 0
  }

  componentWillMount(){
    // if a 0 (for card amount) was sent in the params and if the state doesn't already
    // have cards in it
    if (this.props.navigation.state.params.isThereCards > 0 && !this.state.is_there_cards){
        // access the AsyncStorage to get the deck we want
        getDeck(this.props.navigation.state.params.title)
          .then((deck) => {
            deck_object = deck

            if (deck_object){
              const amount_of_cards = deck_object.questions.length

              this.setState(() => {
                return {
                  is_there_cards: deck_object.questions,
                  card_count: amount_of_cards
                }
              })
            }// end of 'if'

          })// end of .then
    }// end of 'if'
  }

  // when this quiz is over, if the user wants to try again set everything back to 0
  retake_quiz = () => {
    this.setState(() => {
      return {
        which_card_are_we_on: 0,
        which_side: "question",
        answer_text: "",
        questions_correct: 0,
        finished: null,
        incorrect: 0
      }
    })
  }

  // flip between seeing the question and answer of a card
  changeSide = () => {
    let new_side = ""
    if(this.state.which_side == "question"){
      new_side = "answer"
    }else{
      new_side = "question"
    }

    this.setState(() => {
      return {
        which_side: new_side
      }
    })

  }


  submitAnswer = () => {
    let user_answer = this.state.answer_text
    user_answer = user_answer.toLowerCase()

    let real_answer = this.state.is_there_cards[this.state.which_card_are_we_on]["answer"]
    real_answer = real_answer.toLowerCase()

    let questions_correct = this.state.questions_correct
    let next_card = this.state.which_card_are_we_on + 1
    let isIncorrect = this.state.incorrect + 1
    // if the user got the answer correct
    if (user_answer == real_answer){
      questions_correct += 1
      isIncorrect = this.state.incorrect
    }

    let finished = null
    // if we went through every card. (our count started at 0 which is why we put == and not >)
    if (next_card == this.state.card_count){
      finished = true
      next_card = 0
      clearLocalNotification()
        .then(setLocalNotification)
    }

    this.setState(() => {
        return {
          which_card_are_we_on: next_card,
          which_side: "question",
          answer_text: "",
          questions_correct: questions_correct,
          finished: finished,
          incorrect: isIncorrect
        }
    })
  }

  // *** the first 'return' is for if we finished and went through every card. Gives the option to retry
  // or go back to the deck page

  // *** the second 'return' will display either the card's question/answer or show 'there are no cards in this quiz'
  // if the deck has no cards
  render() {
    if(this.state.finished){
           return (
            <View style={styles.container}>

              <Text style={[styles.bigText, {marginBottom: 30, marginTop: 20}]}>You got {this.state.questions_correct}/{this.state.card_count} questions correct</Text>

              <TouchableOpacity style={[styles.button,{backgroundColor: '#7CFC00', marginBottom: 10}]} onPress={this.retake_quiz}>
                <Text style={[styles.smallText, {color: '#FFF', marginTop: 20, marginBottom: 20}]}>Restart Quiz</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button,{backgroundColor: '#F577A9', marginBottom: 10}]} onPress={() => this.props.navigation.navigate('Detail', {title: this.props.navigation.state.params.title, card_total: this.state.card_count })
  }>
                <Text style={[styles.smallText, {color: '#FFF', marginTop: 20, marginBottom: 20}]}>Back to Deck</Text>
              </TouchableOpacity>

            </View>
            )
    }else{

    return (
      <View style={styles.container}>

        {this.state.is_there_cards ?

          <View>

            <View style={{alignItems: 'flex-start', alignSelf: 'flex-start', marginTop: 5, marginLeft: 5 }}>
              <Text style={styles.smallText}>{this.state.which_card_are_we_on + 1}/{this.state.card_count}</Text>
              <Text style={[styles.smallText, {color: '#E11B21'}]}>incorrect: {this.state.incorrect}</Text>
            </View>

          <Text style={[styles.smallText, {marginBottom: 0, textAlign: 'left'}]}>{this.state.is_there_cards[this.state.which_card_are_we_on][this.state.which_side]}</Text>

          <TouchableOpacity  onPress={this.changeSide}>
            {this.state.which_side == "question" ?
              <Text style={[styles.smallText, {color: '#FF0000', marginTop: 15, marginBottom: 15}]}>answer</Text>
              :
              <Text style={[styles.smallText, {color: '#FF0000', marginTop: 15, marginBottom: 15}]}>question</Text>
            }
          </TouchableOpacity>

          <View>

             <TextInput
             style={{padding: 5, height: 40, borderColor: 'gray', borderWidth: 1, margin: 15, marginTop: 40}}
             onChangeText={(answer_text) => this.setState({answer_text})}
             value={this.state.answer_text}
             placeholder="your answer"
            />

            <TouchableOpacity style={[styles.button,{backgroundColor: '#7CFC00', marginBottom: 10}]} onPress={this.submitAnswer}>
              <Text style={[styles.smallText, {color: '#FFF', marginTop: 20, marginBottom: 20}]} >Submit Answer</Text>
            </TouchableOpacity>

          </View>
          </View>

        :

          <Text style={styles.bigText}>There are no cards in this quiz</Text>

        }

      </View>
    )
  }
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  bigText: {
    fontSize: 35
  },
  smallText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    margin: 5,
    justifyContent: 'center',
    paddingRight: 60,
    paddingLeft: 60
  }
})
