import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { TextStyles, LayoutStyles, BorderStyles } from './stylesheets';
import { PlusIcon, DeleteIcon } from './icons';

const IngrStyles = StyleSheet.create({
  icon: {
    width: '10%',
    margin: 'auto'
  },
  name: {
    width: '50%'
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
    // TODO: these two lines should probably be in dataStructures.js
    const newIngredients = [...ingredients];
    newIngredients[index] = { ...ingr, [key]: value };
    setIngredients(newIngredients);
  }

  // also move to datastructure.js probably
  const deleteIngredient = () => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  }

  return (
    <View style={[LayoutStyles.row, BorderStyles.ingredientRow]}>
      <Pressable 
        style={IngrStyles.icon}
        onPress={deleteIngredient}>
        <DeleteIcon iconSize={16}/>
      </Pressable>
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

const AddIngredient = ({ingredients, setIngredients}) => {
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

export const EditIngredientList = ({ ingredients, setIngredients }) => {
  return (
    <View style={{flexGrow: 1}}>
      {ingredients.map((ingredient, index) => {
        return (
          <EditIngredient 
            ingredients={ingredients} 
            setIngredients={setIngredients} 
            index={index}
            key={index} />)
      })}
      <AddIngredient ingredients={ingredients} setIngredients={setIngredients} />
    </View>
  )
}
