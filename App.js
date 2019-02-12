// this is our main file where the navigator and appContainer is

import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import AllDecks from './components/AllDecks'
import DeckDetail from './components/DeckDetail'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import StartQuiz from './components/StartQuiz'

import { setLocalNotification } from './utils/notification'


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
  }
});


const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {

  componentDidMount() {
    // this is for the notifications
    setLocalNotification()
  }

  render() {
    return (

      <AppContainer />

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


