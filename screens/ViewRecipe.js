import React, { useContext, useState } from 'react';
import { View } from "react-native";
import { RecipeYield, IngredientList, RecipeName, EditButton, 
  LayoutStyles, RecipesContext } from '../ui';

const ViewRecipe = ({ route }) => {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const recipe = recipes[route.params.recipe]
  const [recipeYield, setYield] = useState(recipe.yield);

  return (
    <View style={LayoutStyles.screen}>
      <RecipeName name={recipe.name}/>
      <RecipeYield recipeYield={recipeYield} setYield={setYield} />
      <IngredientList 
        ingredients={recipe.ingredients} 
        baseYield={recipe.yield.amount} 
        newYield={recipeYield.amount} />
      <EditButton recipeName={route.params.recipe} />
    </View>
  )
}

export default ViewRecipe;