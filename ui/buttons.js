import React from 'react';
import { Button, StyleSheet } from "react-native";

// TODO: buttons dont accept style props so use Pressable or TouchableHighlight

const ButtonStyles = StyleSheet.create({
  android: {
    color: 'white',
    backgroundColor: '#2f80ed',
    margin: '15px',
    position: 'fixed' // review the positions of css and how to get it to be at the bottom
  }
})

export const EditButton = ({ recipeName, navigate }) => {
  return(
    <Button
      onPress={() => { navigate('EditRecipe', { recipe: recipeName }) }}
      title="Edit Recipe"
      style={ButtonStyles.android}
    />
  )
}

export const SaveButton = () => {
  return(
    <Button
        onPress={() => {
          const newRecipes = addRecipe(recipes, initialName, recipeName, recipeYield, ingredients);
          updateRecipes(newRecipes);
          navigation.navigate('ViewRecipe', { recipe: recipeName });
        }}
        title="Save Recipe"
        style={ButtonStyles.android}
      />
  )
}