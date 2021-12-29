import React, { useContext } from 'react';
import { Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import RecipesContext from '../contexts/RecipesContext';
import { PlusIcon } from '../style/icons';
import { addRecipe } from '../../lib';

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


export const RecipeCard = ({ recipeName }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {navigation.navigate('ViewRecipe', { recipe: recipeName })}}
      style={CardStyle.container}>
      <Text style={CardStyle.text}>{recipeName}</Text>
    </Pressable>
  )
}

export const AddRecipeCard = () => {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        setRecipes(addRecipe(recipes));
        navigation.navigate('EditRecipe', { recipe: "" })
      }}
      style={CardStyle.container}>
      <PlusIcon iconSize={32} />
    </Pressable>
  )
}
