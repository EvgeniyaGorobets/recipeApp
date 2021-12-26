import React, { useState, useContext } from 'react';
import { View } from "react-native";
import { RecipesContext } from '../App';
import { EditIngredient, AddIngredientCard, EditRecipeName, EditYield, LayoutStyles, SaveButton } from '../ui';
import { newRecipe } from '../lib';

const EditRecipe = ({ navigation, route }) => {
  const {recipes, updateRecipes} = useContext(RecipesContext);
  const recipe = route.params.recipe ? recipes[route.params.recipe] : newRecipe();
  const initialName = recipe.name;

  const [recipeName, setName] = useState(recipe.name);
  const [recipeYield, setYield] = useState(recipe.yield);
  const [ingredients, setIngr] = useState(recipe.ingredients);

  return (
    <View style={LayoutStyles.screen}>
      <EditRecipeName name={recipeName} setName={setName} />
      <EditYield recipeYield={recipeYield} setYield={setYield} />
      
      <SaveButton 
        oldName={initialName} 
        newName={recipeName}
        recipeYield={recipeYield}
        ingredients={ingredients}
        navigate={navigation.navigate}
      />
    </View>
  )
}

export default EditRecipe;