export const newRecipe = () => {
  return ({
    name: '',
    yield: {amount: '1', units: 'servings'},
    ingredients: []
  })
}

const extractFields = ( obj, extractedFields ) => { 
  if (Array.isArray(obj)) {
    // what if array is empty.. maybe i should have 1 default ingredient?
    return (
      obj.reduce((fields, item) => {
        return(extractFields(item, fields));
      }, extractedFields)
    );

  } else if (obj && typeof obj == 'object') {
    return (
      Object.keys(obj).reduce((fields, key) => {
        const value = obj[key];
        return ((typeof value == 'string') ? 
          { ...fields, [key]: value} : extractFields(value, fields));
      }, extractedFields)
    );

  }
}

export const addRecipe = (recipes, oldName, recipeName, recipeYield, recipeIngr) => {
  const recipe = {name: recipeName, yield: recipeYield, ingredients: recipeIngr};
  const fields = extractFields(recipe, {});
  console.log(fields)

  // this is redundant since each component checks individually but whatever
  Object.values(fields).forEach(value => {
    if (value == '') {
      throw new Error('EmptyFieldError');
    }
  })

  Object.keys(fields).forEach(key => {
    if (key == "amount" && isNaN(+fields[key])) {
      throw new Error('NaNError')
    }
  })

  if (oldName != recipeName && recipeName in recipes) {
    throw {name: 'DuplicateNameError'};
  }

  const newRecipes = { ...recipes, [recipeName]: recipe };
  if (oldName != recipeName) {
    delete newRecipes[oldName];
  }

  return (newRecipes);
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

