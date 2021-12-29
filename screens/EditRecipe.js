import React, { useState, useContext } from 'react';
import { View } from "react-native";
import { RecipesContext } from '../App';
import { EditRecipeName, EditYield, LayoutStyles, SaveButton, EditIngredientList, DeleteRecipeButton } from '../ui';
import { newRecipe } from '../lib';

const EditRecipe = ({ navigation, route }) => {
  const {recipes, updateRecipes} = useContext(RecipesContext);
  const recipe = route.params.recipe ? recipes[route.params.recipe] : newRecipe();
  const initialName = recipe.name;

  const [recipeName, setName] = useState(recipe.name);
  const [recipeYield, setYield] = useState(recipe.yield);
  const [ingredients, setIngr] = useState(recipe.ingredients);
  const [showErrors, setErrorVisibility] = useState(false);

  return (
    <View style={LayoutStyles.screen}>
      <EditRecipeName name={recipeName} setName={setName} showErrors={showErrors} />
      <EditYield recipeYield={recipeYield} setYield={setYield} showErrors={showErrors} />
      <EditIngredientList ingredients={ingredients} setIngredients={setIngr} showErrors={showErrors} />
      <SaveButton 
        oldName={initialName} 
        newName={recipeName}
        recipeYield={recipeYield}
        ingredients={ingredients}
        navigate={navigation.navigate}
        showErrors={setErrorVisibility}
      />
      <DeleteRecipeButton recipeName={recipeName} navigate={navigation.navigate} />
    </View>
  )
}

export default EditRecipe;