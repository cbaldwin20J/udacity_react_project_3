// this assists the api.js in formatting objects to be saved

import React from 'react'
import { AsyncStorage } from 'react-native'

import { getDecks } from '../utils/api'


// the format for a new deck object to be saved in AsyncStorage
export function addNewDeckFormat (deck_title) {

  	let deck_object = {
  		[deck_title]: {
  			title: deck_title,
  			questions: []
  		}
  	}

  	return deck_object
}


