import React from 'react';
import { TextInput, StyleSheet } from "react-native";
import { TextStyles, FormStyles } from '../style/stylesheets';
import { EditIngrWidths } from '../ingredients/ingredientStyles';

const nameStyle = StyleSheet.flatten([TextStyles.paragraph, FormStyles.textInput, EditIngrWidths.name])

const IngredientNameInput = ({ ingredient, setName, showErrors }) => {
  const errorBorder =
    (showErrors && ingredient.name == "") ? FormStyles.errorInput : null;

  return (
    <TextInput
      placeholder="Ingredient Name"
      onChangeText={text => setName(text)}
      defaultValue={ingredient.name}
      style={[nameStyle, errorBorder]}
    />
  )
}

export default IngredientNameInput;
