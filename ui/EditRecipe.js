import React, { useState } from 'react';
import { View, Button, TextInput } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { RecipesContext } from '../App';


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

const unitOptions = [
  { label: 'cups' },
  { label: 'tbsp' },
  { label: 'tsp' },
  { label: 'mL' },
  { label: 'L' },
  { label: 'grams' },
  { label: 'kg' }
]

const UnitSelect = ({ units, setUnits }) => {
  return (
    <Dropdown
      data={unitOptions}
      labelField="label"
      valueField="label"
      value={units}
      onChange={item => {
        setUnits(item.value);
      }}
    />
  )
}

const EditIngredient = ({ ingredient }) => {
  const [name, setName] = useState(ingredient.name);
  const [amount, setAmount] = useState(ingredient.amount);
  const [units, setUnits] = useState(ingredient.units);

  return (
    <View>
      <TextInput
        placeholder="Ingredient Name"
        onChangeText={text => setName(text)}
        defaultValue={name}
      />
      <TextInput
        placeholder="Amount"
        onChangeText={number => setAmount(number)}
        defaultValue={amount}
        keyboardType="numeric"
      />
      <UnitSelect units={units} setUnits={setUnits} />
    </View>
  )
}

const EditRecipe = ({ navigation, route }) => {
  const recipes = useContext(RecipesContext);
  const recipe = recipes[route.params.recipe]
  const [recipeName, setName] = useState(recipe.name);

  return (
    <View>
      <TextInput
        placeholder="Recipe Name"
        onChangeText={text => setName(text)}
        defaultValue={recipeName}
      />
      <EditYield recipeYield={recipe.yield} />
      {recipe.ingredients.map(ingredient => {
        return (<EditIngredient ingredient={ingredient} key={ingredient.name} />)
      })}
      <Button
        onPress={() => {
          navigation.navigate('ViewRecipe', { recipe: route.params.recipe })
        }}
        title="Save Recipe"
      />
    </View>
  )
}

export default EditRecipe;