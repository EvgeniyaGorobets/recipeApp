import React from 'react';
import { Pressable, Text, StyleSheet } from "react-native";
import { addIngredient } from '../lib';
import { PlusIcon } from './icons';
import { BorderStyles } from './stylesheets';

const CardStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: '5px',
    filter: 'drop-shadow(0px 1px 1px rgba(38, 50, 56, 0.2))',
    borderRadius: '7px',
    marginBottom: '5px'
  },
  text: {
    color: 'black',
    fontSize: '16pt' // TODO: add roboto
  }
})


export const RecipeCard = ({ recipeName, navigate }) => {
  return (
    <Pressable
      onPress={() => {navigate('ViewRecipe', { recipe: recipeName })}}
      style={CardStyle.container}>
      <Text style={CardStyle.text}>{recipeName}</Text>
    </Pressable>
  )
}

export const AddRecipeCard = ({ navigate }) => {
  return (
    <Pressable
      onPress={() => {navigate('EditRecipe', { recipe: "" })}}
      style={CardStyle.container}>
      <PlusIcon iconSize={32} />
    </Pressable>
  )
}
