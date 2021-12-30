import React from 'react';
import { View, ScrollView } from "react-native";
import EditIngredientRow from './EditIngredientRow';
import AddIngredientRow from './AddIngredientRow';

const EditIngredientList = ({ ingredients, setIngredients, showErrors }) => {
  return (
    <ScrollView style={{ flexGrow: 1 }}>
      {ingredients.map((ingredient, index) => {
        return (
          <EditIngredientRow
            ingredients={ingredients}
            setIngredients={setIngredients}
            index={index}
            key={index}
            showErrors={showErrors} />)
      })}
      <AddIngredientRow ingredients={ingredients} setIngredients={setIngredients} />
    </ScrollView>
  )
}

export default EditIngredientList;
