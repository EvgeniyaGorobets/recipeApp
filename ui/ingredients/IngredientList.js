import React from 'react';
import { View, Text } from "react-native";
import { computeIngrAmounts, formatIngrAmounts } from '../../lib';
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
  const formattedIngr = formatIngrAmounts(ingrList);

  return(
    <View style={{flexGrow: 1}}>
      {Object.keys(formattedIngr).map(ingrName => {
        const amount = formattedIngr[ingrName];
        return (<IngredientRow name={ingrName} amount={amount} key={ingrName} />);
      })}
    </View>
  )
}

export default IngredientList;
