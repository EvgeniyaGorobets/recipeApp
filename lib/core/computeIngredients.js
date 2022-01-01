export const computeIngrAmounts = (ingredients, baseYield, newYield) => {
  const ratio = newYield / baseYield;
  const newIngr = ingredients.map(ingredient => {
    const newAmount = (ingredient.amount * ratio).toString();
    return({ ...ingredient, amount: newAmount})
  });
  return(newIngr);
}

const commonFractions = {
  0.875: '⅞',
  0.75: '¾',
  0.667: '⅔',
  0.625: '⅝',
  0.5: '½',
  0.375: '⅜',
  0.333: '⅓',
  0.25: '¼',
  0.125: '⅛'
}


export const formatAmount = (amount, units) => {
  const decimal = amount.indexOf('.');
  if (decimal != -1) {
    let preDecimal = amount.substring(0, decimal);
    let postDecimal = amount.substring(decimal);

    if (+preDecimal == 0) {
      preDecimal = "";
    }

    // round to 3 digits after decimal
    if (postDecimal.length > 4) {
      postDecimal = (+postDecimal).toFixed(3);
    }
    
    // convert to a fraction if possible
    if (+postDecimal in commonFractions) {
      postDecimal = commonFractions[+postDecimal];
    }

    amount = preDecimal + postDecimal;
  }

  return (amount + " " + units);
}
