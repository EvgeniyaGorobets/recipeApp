const newRecipe = () => {
  return ({
    name: '',
    yield: {amount: '1', units: 'servings'},
    ingredients: []
  })
}

export const addRecipe = ( recipes ) => {
  return({ ...recipes, '': newRecipe()});
}

export const updateRecipe = (recipes, oldName, recipeName, recipeYield, recipeIngr) => {
  const recipe = {name: recipeName, yield: recipeYield, ingredients: recipeIngr};
  const newRecipes = { ...recipes, [recipeName]: recipe };
  if (oldName != recipeName) {
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