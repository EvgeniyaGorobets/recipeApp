import React from 'react';
import { TextInput, StyleSheet } from "react-native";
import { TextStyles, FormStyles } from '../style/stylesheets';

const inputStyle = StyleSheet.flatten([TextStyles.paragraph, FormStyles.textInput])

const SafeTextInput = ({ value, setValue, placeholder, showErrors, style }) => {
  const errorBorder = (showErrors && value == "") ? FormStyles.errorInput : null;

  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={text => setValue(text)}
      value={value}
      style={[inputStyle, style, errorBorder]}
    />
  )
}

export default SafeTextInput;
