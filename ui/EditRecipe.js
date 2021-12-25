import React, { useState, useContext } from 'react';
import { View, Button, TextInput } from "react-native";
import { RecipesContext } from '../App';
import { EditIngredient, AddIngredient } from './ingredients';
import { newRecipe, addRecipe } from '../businessLogic/dataStructures';

const EditYield = ({ recipeYield }) => {
  const initialAmount = recipeYield.amount ? recipeYield.amount : "servings";
  const [amount, setAmount] = useState(initialAmount);
  const [units, setUnits] = useState(recipeYield.units);

  return (
    <View>
      <TextInput
        placeholder="Amount"
        onChangeText={number => setAmount(number)}
        defaultValue={amount}
        keyboardType="numeric"
      />
      <TextInput
        onChangeText={text => setUnits(text)}
        defaultValue={units}
      />
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
      <EditYield recipeYield={recipe.yield} />
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