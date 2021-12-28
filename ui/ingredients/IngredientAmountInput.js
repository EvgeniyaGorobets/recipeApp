import React from 'react';
import { TextInput, StyleSheet } from "react-native";
import { TextStyles, FormStyles } from '../style/stylesheets';
import { EditIngrWidths } from './ingredientStyles';

const amountStyle = StyleSheet.flatten([TextStyles.paragraph, FormStyles.textInput, EditIngrWidths.amount])

const IngredientAmountInput = ({ ingredient, setAmount, showErrors }) => {
  const emptyAmountError = (ingredient.amount == "");
  const amountNaNError = isNaN(+ingredient.amount);
  const errorBorder = 
    (showErrors && (emptyAmountError || amountNaNError)) ? FormStyles.errorInput : null;

  return (
    <TextInput
      placeholder="Amount"
      onChangeText={number => setAmount(number)}
      defaultValue={ingredient.amount}
      keyboardType="numeric"
      style={[amountStyle, errorBorder]}
    />
  )
}

export default IngredientAmountInput;
