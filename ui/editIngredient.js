import React from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { TextStyles, LayoutStyles, BorderStyles } from './stylesheets';

const IngrStyles = StyleSheet.create({
  name: {
    width: '60%'
  },
  amount: {
    width: '20%'
  },
  units: {
    width: '20%'
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
      style={[TextStyles.paragraph, IngrStyles.units]}
    />
  )
}

const EditIngredient = ({ ingredients, setIngredients, index }) => {
  const ingr = ingredients[index];

  const updateIngredient = (key, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = { ...ingr, [key]: value };
    setIngredients(newIngredients);
  }

  return (
    <View style={[LayoutStyles.row, BorderStyles.ingredientRow]}>
      <TextInput
        placeholder="Ingredient Name"
        onChangeText={text => updateIngredient('name', text)}
        defaultValue={ingr.name}
        style={[TextStyles.paragraph, IngrStyles.name]}
      />
      <TextInput
        placeholder="Amount"
        onChangeText={number => updateIngredient('amount', number)}
        defaultValue={ingr.amount}
        keyboardType="numeric"
        style={[TextStyles.paragraph, IngrStyles.amount]}
      />
      <UnitSelect 
        units={ingr.units} 
        setUnits={(newUnits) => {updateIngredient('units', newUnits)}} />
    </View>
  )
}


export const EditIngredientList = ({ ingredients, setIngredients }) => {
  return (
    <View style={{flexGrow: 1}}>
      {ingredients.map((ingredient, index) => {
        return (
          <EditIngredient 
            ingredient={ingredient} 
            setIngredients={setIngredients} 
            index={index}
            key={index} />)
      })}
      <AddIngredientCard ingredients={ingredients} setIngredients={setIngr} />
    </View>
  )
}
