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

export function addNewDeckFormat (deck_title) {

  	let deck_object = {
  		[deck_title]: {
  			title: deck_title,
  			questions: []
  		}
  	}
  	return deck_object
}
