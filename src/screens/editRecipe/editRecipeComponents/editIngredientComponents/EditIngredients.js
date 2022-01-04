import React, { useState } from 'react';
import { addIngredient, anyTrue } from '../../../../lib';
import { AddButton, IngredientList } from '../../../../ui';
import EditIngredientRow from './EditIngredientRow';

const EditIngredients = ({ ingredients, setIngredients, showErrors, setRecipeErrors }) => {
  const numIngredients = ingredients.length;
  const [ingredientErrors, setErrors] = useState(Array(numIngredients).fill(false));

  const updateErrors = (index, value) => {
    const newErrors = [...ingredientErrors];
    newErrors[index] = value;
    setErrors(newErrors);
    setRecipeErrors(anyTrue(newErrors));
  }

  const ingredientComponents = ingredients.map((ingredient, index) => {
    return (
      <EditIngredientRow
        ingredients={ingredients}
        index={index}
        setIngredients={setIngredients}
        showErrors={showErrors}
        setErrors={err => updateErrors(index, err)} />
    )
  })

  const addIngr = () => {
    const newIngredients = addIngredient(ingredients);
    setIngredients(newIngredients);
    // new ingredient is blank and thus should automatically cause errors
    updateErrors(newIngredients.length - 1, true);
  }
  const addIngrButton = <AddButton onPress={addIngr} style={{ width: '100%' }} />;

  return (
    <IngredientList ingredients={[...ingredientComponents, addIngrButton]} />
  )
}

export default EditIngredients;
