import React, { useContext } from 'react';
import { Pressable, Text, StyleSheet, View, Alert } from "react-native";
import { StackActions, useNavigation } from '@react-navigation/native';
import { LayoutStyles, Colors } from '../style/stylesheets';
import { updateRecipe } from '../../lib';
import RecipesContext from '../RecipesContext';
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

export const EditButton = ({ recipeName }) => {
  const style = StyleSheet.flatten([ButtonStyles.blueFill, ButtonStyles.big]);
  const navigation = useNavigation();

  return (
    <View style={LayoutStyles.row} >
      <Pressable
        onPress={() => { navigation.navigate('EditRecipe', { recipe: recipeName }) }}
        style={style}>
        <Text style={{ fontSize: 20, color: 'white' }}>Edit Recipe</Text>
      </Pressable>
    </View>
  )
}

export const SaveButton = (props) => {
  const { oldName, newName, recipeYield, ingredients, showErrors, errors } = props;
  const { recipes, setRecipes } = useContext(RecipesContext);
  const navigation = useNavigation();
  const style = StyleSheet.flatten([ButtonStyles.blueFill, ButtonStyles.big]);
  
  const saveRecipe = () => {
    if (!errors) {
      const newRecipes = updateRecipe(recipes, oldName, newName, recipeYield, ingredients);
      setRecipes(newRecipes);

      // If this is a new recipe, then the user never entered the "View Recipe" screen
      //
      // navigate() will keep the "Edit Recipe" screen in the navigation stack, which will cause errors
      // because the route params will stay the same even after the context has changed, and imo it 
      // doesn't make sense for the back button to take you to the edit screen after you've saved
      //
      // replace() will removed "Edit Screen" from the stack, taking care of errors related to 
      // outdates params, and ensuring that the back button on "View Recipe" still takes user to Home
      if (oldName == "") {
        navigation.dispatch(
          StackActions.replace('ViewRecipe', { recipe: newName })
        );
      } else {
        navigation.navigate('ViewRecipe', { recipe: newName });
      }
    } else {
      //<Alert></Alert>
      showErrors(true);
    }

  }

  return (
      <View style={LayoutStyles.row} >
        <Pressable
          onPress={saveRecipe}
          style={style}>
          <Text style={{ fontSize: 20, color: 'white' }}>Save Recipe</Text>
        </Pressable>
      </View>
  )
}


export const DeleteRecipeButton = ({ openModal }) => {
  const style = StyleSheet.flatten([ButtonStyles.redOutline, ButtonStyles.big]);

  return (
    <View style={LayoutStyles.row} >
      <Pressable
        onPress={() => openModal(true)}
        style={style}>
        <Text style={{ fontSize: 20, color: Colors.android.red }}>Delete Recipe</Text>
      </Pressable>
    </View>
  )
}


export const ModalButton = ({ text, color, onPress }) => {
  const buttonColor = (color == Colors.android.red) ? ButtonStyles.redOutline : ButtonStyles.blueOutline;
  const style = StyleSheet.flatten([buttonColor, ButtonStyles.big, { marginTop: '10px' }]);

  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={{ fontSize: 16, color: color }}>{text}</Text>
    </Pressable>
  )
}
