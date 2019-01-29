import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'


import { createStackNavigator, createAppContainer } from 'react-navigation';
import AllDecks from './components/AllDecks'
import CardDetail from './components/CardDetail'


const AppNavigator = createStackNavigator({
  Home: {
    screen: AllDecks
  },
  Detail: {
    screen: CardDetail
  }
});


const AppContainer = createAppContainer(AppNavigator);



export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>


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


