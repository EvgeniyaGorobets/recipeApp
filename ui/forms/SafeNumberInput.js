import React from 'react';
import { TextInput, StyleSheet } from "react-native";
import { TextStyles, FormStyles } from '../style/stylesheets';

const inputStyle = StyleSheet.flatten(
  [TextStyles.paragraph, FormStyles.textInput, {width: '20%', textAlign: 'right', marginRight: '8px'}]
)

const SafeNumberInput = ({ value, setValue, label, showErrors, style }) => {
  const errorBorder = (showErrors && (value == "" || isNaN(+value))) ? FormStyles.errorInput : null;
  const placeholder = label ? label : "Amount"

  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={number => setValue(number)}
      value={value}
      keyboardType="numeric"
      style={[inputStyle, style, errorBorder]}
    />
  )
}

export default SafeNumberInput;
