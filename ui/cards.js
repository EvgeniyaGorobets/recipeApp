import React from 'react';
import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { addIngredient } from '../lib';

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

// refactor so that the centered icon is the reusable bit not the card, because it's not really a card for ingredients
const PlusCard = ({ onPress, iconSize }) => {
  return (
    <Pressable
      onPress={onPress}
      style={CardStyle.container}>
      <Ionicons name="md-add" size={iconSize} color="black" style={{margin: 'auto'}}/>
    </Pressable>
  )
}

export const AddRecipeCard = ({ navigate }) => {
  return (
    <PlusCard 
      onPress={() => {navigate('EditRecipe', { recipe: "" })}}
      iconSize={32} />
  )
}

export const AddIngredientCard = ({ingredients, setIngredients}) => {
  const onPress = () => { 
    const newIngr = addIngredient(ingredients);
    setIngredients(newIngr);
  }

  return (
    <PlusCard onPress={onPress} iconSize={24} />
  )
}
