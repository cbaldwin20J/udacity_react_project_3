import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'





//
//***********************************************************8
// 4 helper methods for our AsyncStorage database

// getDeck: take in a single id argument and return the deck associated with that id
export function getDeck (id) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then(formatCalendarResults)
}

// addCardToDeck: take in two arguments, title and card, and will add the
//       card to the list of questions for the deck with the associated title
export function addCardToDeck ({ title, card }) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

// saveDeckTitle: take in a single title argument and add it to the decks
export function saveDeckTitle (title) {
  return AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(dummyData))
}


// getDecks: return all of the decks along with their titles, questions, and answers
export function getDecks () {
  return AsyncStorage.getAllKeys.then((keys) => {
    return AsyncStorage.multiGet(keys)
      .then((result) => {
        result.map(req => JSON.parse(req)).forEach(console.log);
      });
  });
}

