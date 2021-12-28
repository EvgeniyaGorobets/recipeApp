import React from 'react';
import { Pressable } from "react-native";
import { LayoutStyles, BorderStyles } from '../style/stylesheets';
import { PlusIcon } from '../style/icons';
import { addIngredient } from '../../lib';

const AddIngredientRow = ({ ingredients, setIngredients }) => {
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

export default AddIngredientRow;
