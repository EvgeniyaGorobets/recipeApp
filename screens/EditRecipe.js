import React, { useState, useContext } from 'react';
import { View } from "react-native";
import { RecipesContext } from '../App';
import { EditIngredient, AddIngredient, EditRecipeName, EditYield, LayoutStyles, SaveButton } from '../ui';
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
      {ingredients.map((ingredient, index) => {

        // Create a callback specific for updating this ingredient in the ingredients const
        const updateIngr = (newIngr) => {
          const newIngredients = [ ...ingredients ];
          // idk a cleaner way to do this; it doesnt count as mutating a data structure if i'm creating a new one first
          newIngredients[index] = newIngr;
          setIngr(newIngredients);
        }

        return (<EditIngredient ingredient={ingredient} updateIngredient={updateIngr} key={index} />)
      })}
      <AddIngredient ingredients={ingredients} setIngredients={setIngr} />
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