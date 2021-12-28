import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { EmptyFieldError } from '../generic/errors';
import { TextStyles, LayoutStyles, FormStyles } from '../style/stylesheets';

export const RecipeName = ({ name }) => {
  return (
    <View style={LayoutStyles.row}>
      <Text style={TextStyles.title}>{name}</Text>
    </View>
  )
}

export const EditRecipeName = ({ name, setName, showErrors }) => {
  const nameError = (name == "");
  const errorBorder = (nameError && showErrors) ? FormStyles.errorInput : null;

  return (
      <View style={[LayoutStyles.row, errorBorder]}>
        <TextInput
          placeholder="Recipe Name"
          onChangeText={text => setName(text)}
          defaultValue={name}
          style={TextStyles.title}
        />
        {showErrors && nameError && <EmptyFieldError field="Recipe name" />}
      </View>
  )
}