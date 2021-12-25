export const newRecipe = () => {
  return ({
    name: '',
    yield: {amount: '1', units: 'servings'},
    ingredients: []
  })
}

export const addRecipe = (recipes, oldName, recipeName, recipeYield, recipeIngr) => {
  if (oldName != recipeName && recipeName in recipes) {
    // throw error
    console.log("A recipe called " + recipeName + " already exists.");
  } else {
    const recipe = {name: recipeName, yield: recipeYield, ingredients: recipeIngr};
    const newRecipes = { ...recipes, [recipeName]: recipe };
    delete newRecipes.oldName;
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

