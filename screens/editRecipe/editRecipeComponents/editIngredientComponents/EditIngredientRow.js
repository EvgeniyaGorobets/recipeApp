import React from 'react';
import { deleteIngredient, updateIngredient, checkIngredient } from '../../../../lib';
import { DeleteButton, UnitSelect, SafeNumberInput, SafeTextInput, ErrorView } from '../../../../ui';

const EditIngredientRow = ({ ingredients, index, setIngredients, showErrors, setErrors }) => {
  const ingredient = ingredients[index];

  const updateIngr = (property, value) => {
    const newIngredients = updateIngredient(ingredients, index, property, value);
    setIngredients(newIngredients);
    const errors = checkIngredient(newIngredients[index]);
    if (errors.length > 0) { 
      console.log("Ingredient errors: ", errors);
    }
    setErrors(errors.length > 0);
  }

  const deleteIngr = () => {
    const newIngredients = deleteIngredient(ingredients, index);
    setIngredients(newIngredients);
  }

  return (
    <>
      <DeleteButton onPress={deleteIngr} style={{width: '7%'}} />
      <SafeTextInput
        value={ingredient.name}
        setValue={newName => updateIngr('name', newName)}
        placeholder="Ingredient Name"
        showErrors={showErrors}
        style={{ width: '40%', flexGrow: 1 }}
      />
      <SafeNumberInput
        value={ingredient.amount}
        setValue={newAmount => updateIngr('amount', newAmount)}
        showErrors={showErrors} />
      <UnitSelect
        units={ingredient.units}
        setUnits={newUnits => updateIngr('units', newUnits)} />
      {showErrors && <ErrorView errors={checkIngredient(ingredient)} />}
    </>
  )
}

export default EditIngredientRow;
