import React, { useContext, useState, useEffect } from 'react';
import { View } from "react-native";
import { LayoutStyles, RecipesContext, HideOnKeyboardOpen } from '../../ui';
import { RecipeName, RecipeYield, Ingredients, EditRecipeButton } from './viewRecipeComponents';

const ViewRecipe = ({ route }) => {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const recipe = recipes[route.params.recipe]
  const [recipeYield, setYield] = useState(recipe.yield);

  // Make sure to update the yield if the base yield of the recipe changes
  useEffect(() => {
    setYield(recipe.yield);
  }, [recipe])

  return (
    <View style={LayoutStyles.screen}>
      <RecipeName name={recipe.name}/>
      <RecipeYield recipeYield={recipeYield} setYield={setYield} baseYield={recipe.yield.amount} />
      <Ingredients 
        ingredients={recipe.ingredients} 
        baseYield={recipe.yield.amount} 
        newYield={recipeYield.amount} />
      <HideOnKeyboardOpen children={<EditRecipeButton recipeName={route.params.recipe} />} />
    </View>
  )
}

export default ViewRecipe;