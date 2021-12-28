import React from 'react';
import { View, Text } from "react-native";
import { computeIngrAmounts, formatAmount } from '../../lib';
import { TextStyles, LayoutStyles, BorderStyles } from '../style/stylesheets';
import { IngrWidths } from './ingredientStyles';

const IngredientRow = ({ name, amount }) => {
  return (
    <View style={[LayoutStyles.row, BorderStyles.ingredientRow]}>
      <Text style={[TextStyles.paragraph, IngrWidths.name]}>{name}</Text>
      <Text style={[TextStyles.paragraph, IngrWidths.amount]}>{amount}</Text>
    </View>
  )
}

const IngredientList = ({ ingredients, baseYield, newYield }) => {
  const ingrList = computeIngrAmounts(ingredients, baseYield, newYield);

  return(
    <View style={{flexGrow: 1}}>
      {ingrList.map((ingredient, index) => {
        const amount = formatAmount(ingredient.amount, ingredient.units);
        return (<IngredientRow name={ingredient.name} amount={amount} key={index} />);
      })}
    </View>
  )
}

export default IngredientList;
