import React, { useContext, useState } from 'react';
import { Pressable, Text, StyleSheet, View } from "react-native";
import { TextStyles, LayoutStyles } from './stylesheets';
import { addRecipe } from '../lib';
import { RecipesContext } from '../App';
import { DuplicateNameError } from './errors';

const ButtonStyles = StyleSheet.create({
  button: {
    color: 'white',
    backgroundColor: '#2f80ed',
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '7px',
    flexGrow: 1
  },
  container: {  } // this used to have styling but now it doesnt.. delete?
})

export const EditButton = ({ recipeName, navigate }) => {
  return (
    <View style={[LayoutStyles.row, ButtonStyles.container]} >
      <Pressable
        onPress={() => { navigate('EditRecipe', { recipe: recipeName }) }}
        style={ButtonStyles.button}>
        <Text style={TextStyles.button}>Edit Recipe</Text>
      </Pressable>
    </View>
  )
}

export const SaveButton = (props) => {
  const {oldName, newName, recipeYield, ingredients, navigate, showErrors} = props;
  const {recipes, updateRecipes} = useContext(RecipesContext);

  const saveRecipe = () => {
    try {
      const newRecipes = addRecipe(recipes, oldName, newName, recipeYield, ingredients);
      updateRecipes(newRecipes);
      navigate('ViewRecipe', { recipe: newName });
    } catch (e) {
      console.log(e);
      showErrors(true);
    }
    
  }

  return (
    <>
    {(oldName != newName) && (newName in recipes) && <DuplicateNameError name={newName}/> }
    <View style={[LayoutStyles.row, ButtonStyles.container]} >
      <Pressable
        onPress={saveRecipe}
        style={ButtonStyles.button}>
        <Text style={TextStyles.button}>Save Recipe</Text>
      </Pressable>
    </View>
    </>
  )
}