import React from 'react';
import { TextInput, StyleSheet } from "react-native";
import { TextStyles, FormStyles } from '../style/stylesheets';

const inputStyle = StyleSheet.flatten([TextStyles.paragraph, FormStyles.textInput])

const SafeNumberInput = ({ value, setValue, placeholder, showErrors, style }) => {
  const errorBorder = (showErrors && (value == "" || isNaN(+value))) ? FormStyles.errorInput : null;

  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={number => setValue(number)}
      defaultValue={value}
      keyboardType="numeric"
      style={[inputStyle, style, errorBorder]}
    />
  )
}

export default SafeNumberInput;
