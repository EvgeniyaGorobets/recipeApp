import React, { useState, useContext } from 'react';
import { View, Button, TextInput, Text } from "react-native";
import { RecipesContext } from '../App';
import { EditIngredient, AddIngredient } from './ingredients';
import { newRecipe, addRecipe } from '../lib/dataStructures';

const EditYield = ({ recipeYield, setYield }) => {
  const [numericError, setNumError] = useState(false);
  const [emptyUnitError, setUnitError] = useState(false);

  const updateAmount = (newAmount) => {
    setNumError(false);
    setYield({ ...recipeYield, amount: newAmount});

    if (isNaN(+newAmount)) {
      setNumError(true);
    }
  } 

  const updateUnits = (newUnits) => {
    setUnitError(false);
    setYield({ ...recipeYield, units: newUnits});
    
    if (newUnits.length == 0) {
      setUnitError(true);
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Amount"
        onChangeText={number => updateAmount(number)}
        defaultValue={recipeYield.amount}
        keyboardType="numeric"
      />
      <TextInput
        onChangeText={text => updateUnits(text)}
        defaultValue={recipeYield.units}
      />
      {numericError && <Text>Yield amount must be a number.</Text>}
      {emptyUnitError && <Text>Yield units cannot be empty.</Text>}
    </View>
  )
}

const EditRecipe = ({ navigation, route }) => {
  const {recipes, updateRecipes} = useContext(RecipesContext);
  const recipe = route.params.recipe ? recipes[route.params.recipe] : newRecipe();
  const initialName = recipe.name;

  const [recipeName, setName] = useState(recipe.name);
  const [recipeYield, setYield] = useState(recipe.yield);
  const [ingredients, setIngr] = useState(recipe.ingredients);

  return (
    <View>
      <TextInput
        placeholder="Recipe Name"
        onChangeText={text => setName(text)}
        defaultValue={recipeName}
      />
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
      <Button
        onPress={() => {
          const newRecipes = addRecipe(recipes, initialName, recipeName, recipeYield, ingredients);
          updateRecipes(newRecipes);
          navigation.navigate('ViewRecipe', { recipe: recipeName });
        }}
        title="Save Recipe"
      />
    </View>
  )
}

export default EditRecipe;