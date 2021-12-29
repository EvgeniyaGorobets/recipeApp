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


export const updateRecipe = (recipes, oldName, recipeName, recipeYield, recipeIngr) => {
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