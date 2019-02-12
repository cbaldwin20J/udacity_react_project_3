import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { addNewDeckFormat } from './formatters'



export const DECKS_KEY = '@UdaciCards:Decks'

//
//***********************************************************8
// 4 helper methods for our AsyncStorage database

// getDeck: take in a single id argument and return the deck associated with that id
export function getDeck (id) {
  AsyncStorage.getItem(DECKS_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      return decks[id]

    })
}



// addCardToDeck: take in two arguments, title and card, and will add the
//       card to the list of questions for the deck with the associated title
/*
export function addCardToDeck ({ title, card }) {
  const the_deck = getDeck(title);
  const updated_deck = the_deck.questions[...the_deck.questions, {card}]
  const all_decks = getDecks()
  const updated_decks_object = {...all_decks, updated_deck}
  return AsyncStorage.setItem(DECKS_KEY, JSON.stringify({
    updated_decks_object
  }))
}
*/

// saveDeckTitle: take in a single title argument and add it to the decks

export const initiate_empty_storage_object = () => {
      try {

      console.log("about to initiate empty storage object from api.js")
      return AsyncStorage.setItem(DECKS_KEY, "{}")

      } catch (error) {
        console.log("There was an error initiating empty storage object: " + error.message)
      }
  };


export function saveDeckTitle (title, update=null) {

  let new_deck_object = ''
  try {
    if (update){
      new_deck_object = addCardToDeckFormat(title)
    }else{
      new_deck_object = addNewDeckFormat(title)
    }
    return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(new_deck_object))
  } catch (error) {
    console.log("error in saveDeckTitle: " + error)
  }
}


// getDecks: return all of the decks along with their titles, questions, and answers
export function getDecks () {
  try {
  console.log("about to get decks from api.js")
  return AsyncStorage.getItem(DECKS_KEY)

  } catch (error) {
    console.log("*******************there was an error in 'getDecks'  ")
    return {}
  }
}

export function add_card_to_deck (deck_title, question, answer) {
  console.log("1a) deck_title: " + deck_title + " question: " + question + " answer: " + answer)
  try {
  return getDecks()
    .then((decks) => {
      let the_deck_object = JSON.parse(decks)
      let deck_to_update = the_deck_object[deck_title]
      let questions_array = deck_to_update['questions']
      questions_array.push({question: question, answer: answer})
      console.log("2a) deck_to_update: " + JSON.stringify(deck_to_update))
      console.log("3a) questions_array: " + JSON.stringify(questions_array))

      let updatedDeck = {
        [deck_title]: {
          title: deck_title,
          questions: questions_array
        }
      }

      console.log("3a) updatedDeck: " + JSON.stringify(updatedDeck))
      AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(updatedDeck))

      })

  } catch (error) {
    console.log("*******************there was an error in 'getDecks'  ")
    return {}
  }
}




export function delete_deck (title) {

  return getDecks()
            .then((decks) => {
              decks_object = JSON.parse(decks)
               delete decks_object[title]
               decks_string = JSON.stringify(decks_object)
               AsyncStorage.setItem(DECKS_KEY, decks_string)
            })


}

//**************************************************************** from the practice erase
export const save_deck_title = (title) => {

    console.log("2) save_deck_title tile: " + title)
      try {
        let the_object = {question: [title]}
        let string_object = JSON.stringify(the_object)
        console.log('3) save_deck_title the_object before saving: ' + string_object)
      return AsyncStorage.setItem('@MySuperStore:key', string_object)

      } catch (error) {
        console.log("There was an error saving title: " + error.message)
        }
  };







export const retrievedTheData = () => {
      try {
        return AsyncStorage.getItem('@MySuperStore:key')

      } catch (error) {
          console.log("Error retreiving data: " + error.message)
      }
  };


export const addDeck = (key, entry) => {
  return AsyncStorage.mergeItem('@MySuperStore:key', JSON.stringify({
    [key]: entry
  }))
}