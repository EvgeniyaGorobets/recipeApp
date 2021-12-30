import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import RecipesContext from '../RecipesContext';
import { SafeTextInput } from '../forms';
import { EmptyFieldError, DuplicateNameError } from '../generic/errors';
import { TextStyles, LayoutStyles, FormStyles } from '../style/stylesheets';

export const RecipeName = ({ name }) => {
  return (
    <View style={LayoutStyles.row}>
      <Text style={TextStyles.title}>{name}</Text>
    </View>
  )
}

export const EditRecipeName = ({ name, setName, oldName, showErrors, setErrors }) => {
  const {recipes, setRecipes} = useContext(RecipesContext);
  const updateName = (newName) => {
    setName(newName);
    setErrors(newName == "" || (oldName != newName && newName in recipes));
  }

  return (
    <View style={LayoutStyles.row}>
      <SafeTextInput
        value={name}
        setValue={updateName}
        placeholder="Recipe Name"
        showErrors={showErrors}
        style={TextStyles.title}
      />
      {showErrors && name == "" && <EmptyFieldError field="Recipe name" />}
      {showErrors && (oldName != name && name in recipes) && <DuplicateNameError name={name} />}
    </View>
  )
}