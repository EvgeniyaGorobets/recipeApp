import React, { useContext } from 'react';
import { checkRecipeName } from '../../../lib';
import { SafeTextInput, RecipesContext, ErrorView, RecipeTitleRow } from '../../../ui';

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

  const renderName = (style) => {
    return (
      <>
        <SafeTextInput
        value={name}
        setValue={updateName}
        placeholder="Recipe Name"
        showErrors={showErrors}
        style={style}
      />
      {showErrors && <ErrorView errors={checkRecipeName(recipes, name, oldName)} />}
      </>
    )
  }

  return (
    <RecipeTitleRow renderName={renderName} />
  )
}

export default EditRecipeName;