import React, { useEffect, useState } from 'react';
import { View, Button, TextInput, Text } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { addIngredient } from '../lib/dataStructures';
import { computeIngrAmounts, formatIngrAmounts } from '../lib/computeIngredients';

const unitOptions = [
  { value: 'cups' },
  { value: 'tbsp' },
  { value: 'tsp' },
  { value: 'mL' },
  { value: 'L' },
  { value: 'grams' },
  { value: 'kg' }
]

const UnitSelect = ({ units, setUnits }) => {
  return (
    <Dropdown
      data={unitOptions}
      labelField="value"
      valueField="value"
      value={units}
      onChange={item => {
        setUnits(item.value);
      }}
    />
  )
}

export const EditIngredient = ({ ingredient, updateIngredient }) => {
  const [name, setName] = useState(ingredient.name);
  const [amount, setAmount] = useState(ingredient.amount);
  const [units, setUnits] = useState(ingredient.units);

  // I don't really know if this is good practice, it is technically a side effect
  useEffect(() => {
    updateIngredient({name: name, amount: amount, units: units});
  }, [name, amount, units])

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

// consider replacing buttons with TouchableHighlight if you want to use a real icon
// is it bad practice to pass usestate hooks as props?
export const AddIngredient = ({ ingredients, setIngredients }) => {
  return ( 
    <Button
      onPress={() => { 
        const newIngr = addIngredient(ingredients);
        setIngredients(newIngr);
      }}
      title="+"
    />
  )
}

const Ingredient = ({ name, amount }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{amount}</Text>
    </View>
  )
}

export const IngredientList = ({ ingredients, baseYield, newYield }) => {
  const ingrList = computeIngrAmounts(ingredients, baseYield, newYield);
  const formattedIngr = formatIngrAmounts(ingrList);

  return(
    <View>
      {Object.keys(formattedIngr).map(ingrName => {
        const amount = formattedIngr[ingrName];
        return (<Ingredient name={ingrName} amount={amount} key={ingrName} />);
      })}
    </View>
  )
}
