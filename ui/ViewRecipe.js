import React, { useContext, useState } from 'react';
import { View, Text, Button, TextInput } from "react-native";
import { RecipesContext } from '../App';
import { IngredientList } from './ingredients';

const RecipeYield = ({ recipeYield, setYield }) => {
  // copied from EditIngredient, find a way to reuse pls :)
  const [numericError, setNumError] = useState(false);

  const updateAmount = (newAmount) => {
    setNumError(false);
    setYield({ ...recipeYield, amount: newAmount });

    if (isNaN(+newAmount)) {
      setNumError(true);
    }
  }

  return (
    <View>
      <TextInput
        onChangeText={number => updateAmount(number)}
        defaultValue={recipeYield.amount}
        keyboardType="numeric"
      />
      <Text>{recipeYield.units}</Text>
      {numericError && <Text>Recipe yield must be a number.</Text>}
    </View>
  )
}

const ViewRecipe = ({ navigation, route }) => {
  const { recipes, updateRecipes } = useContext(RecipesContext);
  const recipe = recipes[route.params.recipe]
  const [recipeYield, setYield] = useState(recipe.yield);

  return (
    <View>
      <Text>{recipe.name}</Text>
      <RecipeYield recipeYield={recipeYield} setYield={setYield} />
      <IngredientList 
        ingredients={recipe.ingredients} 
        baseYield={recipe.yield.amount} 
        newYield={recipeYield.amount} />
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