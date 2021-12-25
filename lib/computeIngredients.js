export const computeIngrAmounts = (ingredients, baseYield, newYield) => {
  const ratio = newYield / baseYield;
  console.log(ratio);
  const newIngr = ingredients.map(ingredient => {
    const newAmount = ingredient.amount * ratio;
    return({ ...ingredient, amount: newAmount})
  });
  return(newIngr);
}

export const formatIngrAmounts = (ingredients) => {
  ['a', 'b', 'c'].reduce((a, v) => ({ ...a, [v]: v}), {}) 
  const formattedIngr = ingredients.reduce(
    (obj, ingredient) => {
      const formattedAmount = ingredient.amount + " " + ingredient.units;
      return({ ...obj, [ingredient.name] : formattedAmount })
    }, {})
  return(formattedIngr);
}