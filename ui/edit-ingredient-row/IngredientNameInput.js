import React from 'react';
import { SafeTextInput } from '../forms';

const IngredientNameInput = ({ ingredient, setName, showErrors }) => {
  return (
    <SafeTextInput 
      value={ingredient.name} 
      setValue={setName}
      placeholder="Ingredient Name"
      showErrors={showErrors}
      style={{width: '50%'}}
    />
  )
}

export default IngredientNameInput;
