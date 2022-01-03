import React from 'react';
import { Pressable, Text, StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    filter: 'drop-shadow(0px 1px 1px rgba(38, 50, 56, 0.2))',
    borderRadius: 7,
    marginBottom: 5,
    marginTop: 5,
    width: '100%'
  },
  text: {
    color: 'black',
    fontSize: 16 // TODO: add roboto
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
