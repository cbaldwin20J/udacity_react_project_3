import React, { Component } from 'react'
// 'Platform' is for different style and icon options for ios and android
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default class AddCard extends Component {

  state = {
    question_text: "",
    answer_text: ""
  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.bigText}>Add Card Page</Text>

        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(question_text) => this.setState({question_text})}
        value={this.state.question_text}
        placeholder="question"
       />

        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(answer_text) => this.setState({answer_text})}
        value={this.state.answer_text}
        placeholder="answer"
       />


       <Button
         onPress={"#"}
         title="Submit"
         color="#841584"
         accessibilityLabel="Submit button"
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
