// this is the home page, which will show all the created decks
import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

import { DECKS_KEY, getDecks, initiate_empty_storage_object } from '../utils/api'



export default class AllDecks extends Component {

  state = {
    // will be an object of all of our decks and their info
    all_decks: {}
  }

  componentWillMount(){
    // checking if came from create deck or create card and will redirect to deck detail page
    if (this.props.navigation.state.params){
      if (this.props.navigation.state.params.title){
        this.props.navigation.push('Detail', {title: this.props.navigation.state.params.title, card_total: this.props.navigation.state.params.card_total })
      }
    }

    // getting all of our decks from AsyncStorage
    getDecks()
      .then((decks) => {
        decks_object = JSON.parse(decks)

        if (decks_object && (Object.keys(decks_object).length > 0)){
          this.setState(() => {
            return {
              // saving our decks from AsyncStorage in our state
              all_decks: decks_object
            }
          })
        }else{
          // if we have nothing in AsyncStorage then we create an empty object in it
          initiate_empty_storage_object()
        }
      }) // end of .then
  }// end of componentWillMount


  render() {
    return (
      <View style={styles.container}>

      <ScrollView style={styles.margin}>

        {Object.keys(this.state.all_decks).length > 0 ?

          Object.keys(this.state.all_decks).map((key) => (

            <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate('Detail', {title: key, card_total: this.state.all_decks[key].questions.length },)}>
              <Text style={styles.bigText} >{key}</Text>
              <Text style={styles.smallText}>{this.state.all_decks[key].questions.length}</Text>
            </ TouchableOpacity>

          ))

        :

          <Text style={styles.smallText}>No decks to be shown</Text>

        }

    </ScrollView>

        <View style={styles.menuContainer}>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>

            <Text style={styles.extraSmallText}>All Decks</Text>

            <Icon
              name="ios-add"
              color="#ccc"
              size={25}
            />

          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.push('AddDeck')}>

            <Text style={styles.extraSmallText}>Add New Deck</Text>

            <Icon
              name="ios-albums"
              color="#ccc"
              size={25}
            />

          </TouchableOpacity>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFF',
    marginTop: 20
  },
  bigText: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 50
  },
  smallText: {
    color: '#C0C0C0',
    fontSize: 20,
    textAlign: 'center'
  },
  extraSmallText: {
    color: '#C0C0C0',
    fontSize: 12,
    textAlign: 'center'
  },
  button: {
    flex: 1,
    backgroundColor: '#EDEDFC',
    borderColor: '#D2D2DC',
    borderWidth: 2,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4
  },
  margin: {
    marginBottom: 60,
    paddingRight: 30
  }
})
