import React from 'react';
import { Pressable, Text, StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 7,
    marginBottom: 5,
    marginTop: 5,
    width: '98%',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginLeft: 2,
    marginRight: 2
  },
  text: {
    color: 'black',
    fontSize: 22 // TODO: add roboto
  }
})


const TextCard = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={CardStyle.container}>
      <Text style={CardStyle.text}>{text}</Text>
    </Pressable>
  )
}

export default TextCard;
