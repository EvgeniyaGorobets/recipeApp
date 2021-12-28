import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { EmptyFieldError } from './errors';
import { TextStyles, LayoutStyles, BorderStyles } from './stylesheets';

export const RecipeName = ({ name }) => {
  return (
    <View style={LayoutStyles.row}>
      <Text style={TextStyles.title}>{name}</Text>
    </View>
  )
}

export const EditRecipeName = ({ name, setName, showErrors }) => {
  const nameError = (name == "");
  const errorBorder = (nameError && showErrors) ? BorderStyles.errorInput : null;

  return (
    <>
      <View style={[LayoutStyles.row, errorBorder]}>
        <TextInput
          placeholder="Recipe Name"
          onChangeText={text => setName(text)}
          defaultValue={name}
          style={TextStyles.title}
        />
      </View>
      {showErrors && nameError && <EmptyFieldError field="Recipe name" />}
    </>
  )
}