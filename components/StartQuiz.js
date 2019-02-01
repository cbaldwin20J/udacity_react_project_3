import React, { Component } from 'react'
// 'Platform' is for different style and icon options for ios and android
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default class DeckDetail extends Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={{alignItems: 'flex-start', alignSelf: 'flex-start', marginTop: 5, marginLeft: 5 }}>
          <Text style={styles.smallText}>1/4</Text>
        </View>

        <Text style={styles.bigText}>Does React Native work with Android?</Text>
        <TouchableOpacity  onPress={'#'}>
            <Text style={[styles.smallText, {color: '#FF0000', marginTop: 15, marginBottom: 15}]}>Answer</Text>
        </TouchableOpacity>

        <View>

          <TouchableOpacity style={[styles.button,{backgroundColor: '#7CFC00', marginBottom: 10}]} onPress={'#'}>
            <Text style={[styles.smallText, {color: '#FFF', marginTop: 20, marginBottom: 20}]} >Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button,{backgroundColor: '#fa8072'}]} onPress={'#'}>
            <Text style={[styles.smallText, {color: '#FFF', marginTop: 20, marginBottom: 20}]} >Incorrect</Text>
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
    alignItems: 'center'
  },
  bigText: {
    fontSize: 35
  },
  smallText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    margin: 5,
    justifyContent: 'center',
    paddingRight: 60,
    paddingLeft: 60
  }
})
