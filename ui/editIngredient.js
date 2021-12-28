import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { TextStyles, LayoutStyles, BorderStyles, FormStyles } from './stylesheets';
import { PlusIcon, DeleteIcon } from './icons';
import { EmptyFieldError, NumericError } from './errors';
import { addIngredient } from '../lib';

const IngrStyles = StyleSheet.create({
  icon: {
    width: '7%',
    margin: 'auto'
  },
  name: {
    width: '53%'
  },
  amount: {
    width: '20%'
  },
  units: {
    width: '20%'
  }
})

const textInputStyle = StyleSheet.flatten([TextStyles.paragraph, FormStyles.textInput]);

// consider refactoring styles more
// i want the error msgs on the inside of the bottom line

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
      style={[textInputStyle, IngrStyles.units]}
    />
  )
}

const EditIngredient = ({ ingredients, setIngredients, index, showErrors }) => {
  const ingredient = ingredients[index];

  const emptyNameError = (ingredient.name == "");
  const emptyAmountError = (ingredient.amount == "");
  const amountNaNError = (ingredient.amount == "");

  console.log(IngrStyles)

  const errorBorder = (error) => {
    return (showErrors && error ? FormStyles.errorInput : null);
  }

  const updateIngredient = (key, value) => {
    // TODO: these two lines should probably be in dataStructures.js
    const newIngredients = [...ingredients];
    newIngredients[index] = { ...ingredient, [key]: value };
    setIngredients(newIngredients);
  }

  // also move to datastructure.js probably
  const deleteIngredient = () => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  }

  return (
    <>
      <View style={[LayoutStyles.row, BorderStyles.ingredientRow]}>
        <Pressable
          style={IngrStyles.icon}
          onPress={deleteIngredient}>
          <DeleteIcon iconSize={16} />
        </Pressable>
        <TextInput
          placeholder="Ingredient Name"
          onChangeText={text => updateIngredient('name', text)}
          defaultValue={ingredient.name}
          style={[textInputStyle, IngrStyles.name, errorBorder(emptyNameError)]}
        />
        <TextInput
          placeholder="Amount"
          onChangeText={number => updateIngredient('amount', number)}
          defaultValue={ingredient.amount}
          keyboardType="numeric"
          style={[textInputStyle, IngrStyles.amount, errorBorder(emptyAmountError || amountNaNError)]}
        />
        <UnitSelect
          units={ingredient.units}
          setUnits={(newUnits) => { updateIngredient('units', newUnits) }} />
      </View>

      {showErrors && emptyNameError && <EmptyFieldError field={"Ingredient name"} />}
      {showErrors && emptyAmountError && <EmptyFieldError field={"Ingredient amount"} />}
      {showErrors && amountNaNError && <NumericError field={"Ingredient amount"} />}
    </>
  )
}

const AddIngredient = ({ ingredients, setIngredients }) => {
  const onPress = () => {
    const newIngr = addIngredient(ingredients);
    setIngredients(newIngr);
  }

  return (
    <Pressable
      onPress={onPress}
      style={[LayoutStyles.row, BorderStyles.ingredientRow]}>
      <PlusIcon iconSize={24} />
    </Pressable>
  )
}

export const EditIngredientList = ({ ingredients, setIngredients, showErrors }) => {
  return (
    <View style={{ flexGrow: 1 }}>
      {ingredients.map((ingredient, index) => {
        return (
          <EditIngredient
            ingredients={ingredients}
            setIngredients={setIngredients}
            index={index}
            key={index}
            showErrors={showErrors} />)
      })}
      <AddIngredient ingredients={ingredients} setIngredients={setIngredients} />
    </View>

  )
}
