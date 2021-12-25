import React, { useContext } from 'react';
import { View, Text, Button } from "react-native";
import { RecipesContext } from '../App';

const RecipeYield = ({ recipeYield }) => {
  return (
    <Text>{recipeYield.amount} {recipeYield.units}</Text>
  )
}

const Ingredient = ({ ingredient }) => {
  return (
    <View>
      <Text>{ingredient.name}</Text>
      <Text>{ingredient.amount}</Text>
      <Text>{ingredient.units}</Text>
    </View>
  )
}

const ViewRecipe = ({ navigation, route }) => {
  const { recipes, updateRecipes } = useContext(RecipesContext);
  const recipe = recipes[route.params.recipe]

  return (
    <View>
      <Text>{recipe.name}</Text>
      <RecipeYield recipeYield={recipe.yield} />
      {recipe.ingredients.map(ingredient => {
        return (<Ingredient ingredient={ingredient} key={ingredient.name} />);
      })}
      <Button
        onPress={() => {
          navigation.navigate('EditRecipe', { recipe: route.params.recipe })
        }}
        title="Edit Recipe"
      />
    </View>
  )
}

export default ViewRecipe;