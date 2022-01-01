import React, { useContext } from 'react';
import { View } from 'react-native';
import { checkRecipeName } from '../../../lib';
import { SafeTextInput, RecipesContext, TextStyles, LayoutStyles, ErrorView } from '../../../ui';

const EditRecipeName = ({ name, setName, oldName, showErrors, setErrors }) => {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const updateName = (newName) => {
    setName(newName);
    const errors = checkRecipeName(recipes, newName, oldName);
    if (errors.length > 0) { 
      console.log("Recipe name errors: ", errors);
    }
    setErrors(errors.length > 0);
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
      {showErrors && <ErrorView errors={checkRecipeName(recipes, name, oldName)} />}
    </View>
  )
}

export default EditRecipeName;