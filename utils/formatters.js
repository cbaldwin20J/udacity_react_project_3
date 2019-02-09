import React from 'react'
import { AsyncStorage } from 'react-native'

import { getDecks } from '../utils/api'


/*
{
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces'
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event'
			}
		]
	},
	Javascript: {
		title: 'Javascript',
		questions: [
			{
				question: 'What is a closure?',
				answer: 'The combination of a function and the lexical environment.'
			}
		]
	}
}
*/

function getSpecificDeck (deck_title) {
	getDecks()
	.then((decks) => {
		let the_deck_object = JSON.parse(decks)
		let the_deck = the_deck_object[deck_title]
		console.log("2a) the_deck: " + the_deck)
		return the_deck
	})
}

export function addNewDeckFormat (deck_title) {

  	let deck_object = {
  		[deck_title]: {
  			title: deck_title,
  			questions: []
  		}
  	}
  	return deck_object
}


