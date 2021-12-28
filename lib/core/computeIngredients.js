export const computeIngrAmounts = (ingredients, baseYield, newYield) => {
  const ratio = newYield / baseYield;
  const newIngr = ingredients.map(ingredient => {
    const newAmount = (ingredient.amount * ratio).toString();
    return({ ...ingredient, amount: newAmount})
  });
  return(newIngr);
}

export const formatAmount = (amount, units) => {
  const decimalSplit = amount.split('.');
  if (decimalSplit.length == 2 && decimalSplit[1].length > 3) {
    amount = (+amount).toFixed(3);
  }
  return (amount + " " + units);
}