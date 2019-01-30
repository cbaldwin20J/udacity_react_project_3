import React, { Component } from 'react'
// 'Platform' is for different style and icon options for ios and android
import { View, Text, StyleSheet, Button } from 'react-native'


export default class StartQuiz extends Component {

  state = {
    questionsAndAnswers : {}
  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.bigText}>Question Page</Text>


       <Button
         onPress={"#"}
         title="Yes"
         color="#841584"
         accessibilityLabel="Yes"
       />

       <Button
         onPress={"#"}
         title="No"
         color="#841584"
         accessibilityLabel="No"
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
