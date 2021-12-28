const newIngredient = () => {
  return ({
    name: '',
    amount: '',
    units: 'cups'
  })
}

/**
 * Add a new, blank ingredient to an ingredient list
 * @param {*} ingredients The list of ingredients
 * @returns A new list of ingredients, with the new ingredient at the end
 */
export const addIngredient = (ingredients) => {
  return ([ ...ingredients, newIngredient()]);
}


/**
 * Update a single property of an ingredient.
 * @param {*} ingredients The list of ingredients containing the ingredient to update
 * @param {*} index The index of the ingredient to update
 * @param {*} property The property to update
 * @param {*} value The new value of the property
 * @returns A new, updated list of ingredients containing the changed property
 */
export const updateIngredient = (ingredients, index, property, value) => {
  const newIngredients = [...ingredients];
  const ingredient = newIngredients[index];
  newIngredients[index] = { ...ingredient, [property]: value };
  return(newIngredients);
}


/**
 * Delete an ingredient from an ingredient list
 * @param {*} ingredients The list of ingredients from which to delete
 * @param {*} index The index of the ingredient to delete
 * @returns A new list of ingredients, without the deleted ingredient
 */
export const deleteIngredient = (ingredients, index) => {
  const newIngredients = [...ingredients];
  newIngredients.splice(index, 1);
  return(newIngredients);
}