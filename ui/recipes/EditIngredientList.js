import React from 'react';
import { View, ScrollView } from "react-native";
import EditIngredientRow from '../edit-ingredient-row/EditIngredientRow';
import AddIngredientRow from '../edit-ingredient-row/AddIngredientRow';

const EditIngredientList = ({ ingredients, setIngredients, showErrors, setErrors }) => {
  return (
    <ScrollView style={{ flexGrow: 1 }}>
      {ingredients.map((ingredient, index) => {
        return (
          <EditIngredientRow
            ingredients={ingredients}
            setIngredients={setIngredients}
            index={index}
            key={index}
            showErrors={showErrors}
            setErrors={setErrors} />)
      })}
      <AddIngredientRow ingredients={ingredients} setIngredients={setIngredients} />
    </ScrollView>
  )
}

export default EditIngredientList;
