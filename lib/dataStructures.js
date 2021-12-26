export const newRecipe = () => {
  return ({
    name: '',
    yield: {amount: '1', units: 'servings'},
    ingredients: []
  })
}

export const addRecipe = (recipes, oldName, recipeName, recipeYield, recipeIngr) => {
  if (oldName != recipeName && recipeName in recipes) {
    throw new Error('Duplicate recipe name');
  } else {
    const recipe = {name: recipeName, yield: recipeYield, ingredients: recipeIngr};
    const newRecipes = { ...recipes, [recipeName]: recipe };
    if (oldName != recipeName) {
      delete newRecipes[oldName];
    }
    return (newRecipes);
  }
}

const newIngredient = () => {
  return ({
    name: '',
    amount: '',
    units: 'cups'
  })
}

export const addIngredient = (ingredients) => {
  return ([ ...ingredients, newIngredient()]);
}

