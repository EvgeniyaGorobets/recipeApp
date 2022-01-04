export const newRecipe = () => {
  return ({
    name: '',
    yield: {amount: '1', units: 'servings'},
    ingredients: []
  })
}

export const updateRecipe = (recipes, oldName, recipeName, recipeYield, recipeIngr) => {
  const recipe = {name: recipeName, yield: recipeYield, ingredients: recipeIngr};
  const newRecipes = { ...recipes, [recipeName]: recipe };
  if (oldName != recipeName && oldName != '') {
    delete newRecipes[oldName];
  }
  return (newRecipes);
}

/**
 * Delete a recipe from a list of recipes
 * @param {*} recipes The list of recipes from which to delete
 * @param {*} recipeName The name of the recipe to delete
 * @returns A new list of recipes, without the deleted recipes
 */
export const deleteRecipe = (recipes, recipeName) => {
  const newRecipes = { ...recipes };
  delete newRecipes[recipeName];
  return(newRecipes);
}

export const checkRecipeYield = (recipeYield) => {
  const errors = [];
  if (recipeYield.amount == "") {
    errors.push({errorType: 'EmptyFieldError', field: 'Yield amount'});
  }
  if (isNaN(+recipeYield.amount)) {
    errors.push({errorType: 'NumericError', field: "Yield amount"})
  }
  if (recipeYield.units == "") {
    errors.push({errorType: 'EmptyFieldError', field: 'Yield units'});
  }
  return(errors);
}


export const checkRecipeName = (recipes, recipeName, oldName) => {
  const errors = [];
  if (recipeName == "") {
    errors.push({errorType: 'EmptyFieldError', field: 'Recipe name'});
  }
  if (oldName != recipeName && recipeName in recipes) {
    errors.push({errorType: 'DuplicateNameError', field: recipeName});
  }
  return(errors);
}