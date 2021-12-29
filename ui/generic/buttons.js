import React, { useContext } from 'react';
import { Pressable, Text, StyleSheet, View } from "react-native";
import { TextStyles, LayoutStyles, Colors } from '../style/stylesheets';
import { addRecipe, deleteRecipe } from '../../lib';
import { RecipesContext } from '../../App';
import { DuplicateNameError } from './errors';

const ButtonStyles = StyleSheet.create({
  blue: {
    color: 'white',
    backgroundColor: Colors.android.blue, // android blue
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '7px',
    flexGrow: 1
  },
  red: {
    color: Colors.android.red,
    backgroundColor: 'white',
    borderColor: Colors.android.red,
    borderWidth: '3px',
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '7px',
    flexGrow: 1
  }
})

export const EditButton = ({ recipeName, navigate }) => {
  return (
    <View style={LayoutStyles.row} >
      <Pressable
        onPress={() => { navigate('EditRecipe', { recipe: recipeName }) }}
        style={ButtonStyles.blue}>
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
    <View style={LayoutStyles.row} >
      <Pressable
        onPress={saveRecipe}
        style={ButtonStyles.blue}>
        <Text style={TextStyles.button}>Save Recipe</Text>
      </Pressable>
    </View>
    </>
  )
}


// TODO: add an "Are you sure?" modal
export const DeleteRecipeButton = ({ recipeName, navigate }) => {
  const {recipes, updateRecipes} = useContext(RecipesContext);

  const onPress = () => {
    updateRecipes(deleteRecipe(recipes, recipeName));
    navigate('Home'); 
  }

  return (
    <View style={LayoutStyles.row} >
      <Pressable
        onPress={onPress}
        style={ButtonStyles.red}>
        <Text style={[TextStyles.button, {color: Colors.android.red}]}>Delete Recipe</Text>
      </Pressable>
    </View>
  )
}