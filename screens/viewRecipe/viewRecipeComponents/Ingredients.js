import React from 'react';
import { Text } from "react-native";
import { computeIngrAmounts, formatAmount } from '../../../lib';
import { IngredientList, TextStyles } from '../../../ui';

const Ingredients = ({ ingredients, baseYield, newYield }) => {
  const computedIngredients = computeIngrAmounts(ingredients, baseYield, newYield);

  const ingredientComponents = computedIngredients.map(ingredient => {
    const ingrName = <Text style={[TextStyles.paragraph, {width: '70%'}]} key={0}>{ingredient.name}</Text>
    const amount = formatAmount(ingredient.amount, ingredient.units);
    const ingrAmount = <Text style={[TextStyles.paragraph, {width: '30%'}]} key={1}>{amount}</Text>
    return([ingrName, ingrAmount]);
  })

  return(
    <IngredientList ingredients={ingredientComponents} />
  )
}

export default Ingredients;
