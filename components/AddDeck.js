import React, { Component } from 'react'
// 'Platform' is for different style and icon options for ios and android
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default class AddDeck extends Component {

  state = {
    deck_title: ""
  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.bigText}>Add Deck Page</Text>

        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(deck_title) => this.setState({deck_title})}
        value={this.state.deck_title}
        placeholder="Deck Title"
       />


       <Button
         onPress={"#"}
         title="Submit"
         color="#841584"
         accessibilityLabel="Create Deck"
       />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigText: {
    fontSize: 50,
    fontWeight: "bold",
  },
  smallText: {
    color: '#C0C0C0',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 50,
  },
})
