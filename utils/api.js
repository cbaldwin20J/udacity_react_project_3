// this page is for AsyncStorage retrievals and updates

import React from 'react'
import { AsyncStorage } from 'react-native'
import { addNewDeckFormat } from './formatters'

export const DECKS_KEY = '@UdaciCards:Decks'


// getDeck: take in a single id argument and return the deck associated with that id
export function getDeck (id) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      return decks[id]
    })
}


// if we have no AsyncStorage set up, this will put an empty object there
export const initiate_empty_storage_object = () => {
      try {
        return AsyncStorage.setItem(DECKS_KEY, "{}")
      } catch (error) {
        console.log("There was an error initiating empty storage object: " + error.message)
      }
}


// will create a new deck or update an already created one
export function saveDeckTitle (title, update=null) {

  let new_deck_object = ''
  try {
    if (update){
      // will return us the object of the updated deck to be saved
      new_deck_object = addCardToDeckFormat(title)
    }else{
      // will return us the object of the new deck to be saved
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
    return AsyncStorage.getItem(DECKS_KEY)
  } catch (error) {
    console.log("*******************there was an error in 'getDecks'  ")
    return {}
  }
}


// add a new card to a deck
export function add_card_to_deck (deck_title, question, answer) {

  try {
    return getDecks()
      // get all of our decks
      .then((decks) => {
        let the_deck_object = JSON.parse(decks)
        // find the deck to add the card to
        let deck_to_update = the_deck_object[deck_title]
        // get the cards array from the deck
        let questions_array = deck_to_update['questions']
        // update the array with the new card
        questions_array.push({question: question, answer: answer})

        let updatedDeck = {
          [deck_title]: {
            title: deck_title,
            questions: questions_array
          }
        }

        AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(updatedDeck))

      })// end of .then

  } catch (error) {
    console.log("*******************there was an error in 'getDecks'  ")
    return {}
  }
}


// to delete a deck
export function delete_deck (title) {

  return getDecks()
            // get all of our decks
            .then((decks) => {
              decks_object = JSON.parse(decks)
              // delete the deck we want
              delete decks_object[title]
              decks_string = JSON.stringify(decks_object)
              // update the AsyncStorage
              AsyncStorage.setItem(DECKS_KEY, decks_string)
            })

}

