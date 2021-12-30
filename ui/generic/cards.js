import React, { useContext } from 'react';
import { View, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import RecipesContext from '../RecipesContext';
import { PlusIcon } from '../style/icons';
import { LayoutStyles } from '..';
import { addRecipe } from '../../lib';

const CardStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: '5px',
    filter: 'drop-shadow(0px 1px 1px rgba(38, 50, 56, 0.2))',
    borderRadius: '7px',
    marginBottom: '5px',
    marginTop: '5px',
    width: '100%'
  },
  text: {
    color: 'black',
    fontSize: '16pt' // TODO: add roboto
  }
})


export const RecipeCard = ({ recipeName }) => {
  const navigation = useNavigation();

  return (
    <View style={LayoutStyles.row}>
      <Pressable
        onPress={() => { navigation.navigate('ViewRecipe', { recipe: recipeName }) }}
        style={CardStyle.container}>
        <Text style={CardStyle.text}>{recipeName}</Text>
      </Pressable>
    </View>
  )
}

export const AddRecipeCard = () => {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const navigation = useNavigation();

  return (
    <View style={LayoutStyles.row}>
      <Pressable
        onPress={() => {
          setRecipes(addRecipe(recipes));
          navigation.navigate('EditRecipe', { recipe: "" })
        }}
        style={CardStyle.container}>
        <PlusIcon iconSize={32} />
      </Pressable>
    </View>
  )
}
