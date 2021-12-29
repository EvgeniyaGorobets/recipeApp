import React, { useContext } from 'react';
import { Pressable, Text, StyleSheet, View } from "react-native";
import { TextStyles, LayoutStyles, Colors } from '../style/stylesheets';
import { addRecipe, deleteRecipe } from '../../lib';
import { RecipesContext } from '../../App';
import { DuplicateNameError } from './errors';

export const ButtonStyles = StyleSheet.create({
  big: {
    width: '100%',
    padding: '10px',
    textAlign: 'center',
    flexGrow: 1,
    borderRadius: '7px'
  },
  small: {
    width: '50%',
    padding: '5px',
    textAlign: 'center',
    borderRadius: '7px'
  },
  blueFill: {
    color: 'white',
    backgroundColor: Colors.android.blue,
  },
  blueOutline: {
    color: Colors.android.blue,
    backgroundColor: 'white',
    borderColor: Colors.android.blue,
    borderWidth: '3px'
  },
  redOutline: {
    color: Colors.android.red,
    backgroundColor: 'white',
    borderColor: Colors.android.red,
    borderWidth: '3px'
  }
})

export const EditButton = ({ recipeName, navigate }) => {
  const style = StyleSheet.flatten([ButtonStyles.blueFill, ButtonStyles.big])

  return (
    <View style={LayoutStyles.row} >
      <Pressable
        onPress={() => { navigate('EditRecipe', { recipe: recipeName }) }}
        style={style}>
        <Text style={{fontSize: 20, color: 'white'}}>Edit Recipe</Text>
      </Pressable>
    </View>
  )
}

export const SaveButton = (props) => {
  const {oldName, newName, recipeYield, ingredients, navigate, showErrors} = props;
  const {recipes, updateRecipes} = useContext(RecipesContext);
  const style = StyleSheet.flatten([ButtonStyles.blueFill, ButtonStyles.big])

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
        style={style}>
        <Text style={{fontSize: 20, color: 'white'}}>Save Recipe</Text>
      </Pressable>
    </View>
    </>
  )
}


export const DeleteRecipeButton = ({ openModal }) => {
  const style = StyleSheet.flatten([ButtonStyles.redOutline, ButtonStyles.big]);

  return (
    <View style={LayoutStyles.row} >
      <Pressable
        onPress={() => openModal(true)}
        style={style}>
        <Text style={{fontSize: 20, color: Colors.android.red}}>Delete Recipe</Text>
      </Pressable>
    </View>
  )
}


export const ModalButton = ({ text, color, onPress }) => {
  const buttonColor = (color == Colors.android.red) ? ButtonStyles.redOutline : ButtonStyles.blueOutline;
  const style = StyleSheet.flatten([buttonColor, ButtonStyles.big, {marginTop: '10px'}]);

  return(
    <Pressable style={style} onPress={onPress}>
      <Text style={{fontSize: 16, color: color}}>{text}</Text>
    </Pressable>
  )
}
