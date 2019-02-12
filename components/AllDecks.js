import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, AsyncStorage } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

import {DECKS_KEY, getDecks, initiate_empty_storage_object} from '../utils/api'



export default class AllDecks extends Component {

  state = {
    all_decks: {}
  }

  componentWillMount(){
    if (this.props.navigation.state.params){
      if (this.props.navigation.state.params.title){
        this.props.navigation.push('Detail', {title: this.props.navigation.state.params.title, card_total: this.props.navigation.state.params.card_total })

      }
    }

    getDecks()
      .then((decks) => {
        decks_object = JSON.parse(decks)
        console.log("1) componentDidMount 'decks': " + JSON.stringify(decks_object))

        if (decks_object && (Object.keys(decks_object).length > 0)){
          console.log("ran the if")
          this.setState(() => {
            return {
              all_decks: decks_object
            }
          })

        }else{
          console.log("ran the else")
          initiate_empty_storage_object()
            .then(() => {

              getDecks()
                .then((decks) => {
                    let decks_obj = JSON.parse(decks)
                    console.log("Here is the current asyncstorage: " + JSON.stringify(decks_obj))
                    console.log("Here is the current asyncstorage length: " + (Object.keys(decks_obj).length))

                })
            })
        }
      })
  }


  render() {
    console.log("2) *****************************: " + JSON.stringify(this.state.all_decks))
    console.log("3) ********************* length of object: " + (Object.keys(this.state.all_decks).length))
    return (
      <View style={styles.container}>

      <ScrollView style={{flex: 1 }}>

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
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddDeck')}>
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
    bottom: 0
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
  }
})
