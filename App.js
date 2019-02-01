import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import middleware from './middleware'



import { createStackNavigator, createAppContainer } from 'react-navigation';
import AllDecks from './components/AllDecks'
import DeckDetail from './components/DeckDetail'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import StartQuiz from './components/StartQuiz'
import DeleteDeck from './components/DeleteDeck'







const AppNavigator = createStackNavigator({
  Home: {
    screen: AllDecks
  },
  Detail: {
    screen: DeckDetail
  },
  AddDeck: {
    screen: AddDeck
  },
  AddCard: {
    screen: AddCard
  },
  StartQuiz: {
    screen: StartQuiz
  },
  DeleteDeck: {
    screen: DeleteDeck
  }
});


const AppContainer = createAppContainer(AppNavigator);




export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>


          <AppContainer />

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


