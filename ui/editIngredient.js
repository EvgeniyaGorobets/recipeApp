import React, { useEffect, useState } from 'react';
import { View, Button, TextInput, StyleSheet } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { addIngredient } from '../lib/dataStructures';
import { TextStyles, LayoutStyles } from './stylesheets';

const ingrStyles = StyleSheet.create({
  name: {
    width: '60%',
    display: 'inline-block'
  },
  amount: {
    width: '20%',
    display: 'inline-block' // should this be inline-flex? review flex
  },
  units: {
    width: '20%',
    display: 'inline-block'
  }
})

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
      style={[TextStyles.paragraph, ingrStyles.units]}
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
    <View style={LayoutStyles.row}>
      <TextInput
        placeholder="Ingredient Name"
        onChangeText={text => setName(text)}
        defaultValue={name}
        style={[TextStyles.paragraph, ingrStyles.name]}
      />
      <TextInput
        placeholder="Amount"
        onChangeText={number => setAmount(number)}
        defaultValue={amount}
        keyboardType="numeric"
        style={[TextStyles.paragraph, ingrStyles.amount]}
      />
      <UnitSelect units={units} setUnits={setUnits} />
    </View>
  )
}
