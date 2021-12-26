import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { computeIngrAmounts, formatIngrAmounts } from '../lib/computeIngredients';
import { TextStyles, LayoutStyles, BorderStyles } from './stylesheets';

const IngrStyles = StyleSheet.create({
  name: {
    width: '70%'
  },
  amount: {
    width: '30%'
  }
})

const Ingredient = ({ name, amount }) => {
  return (
    <View style={[LayoutStyles.row, BorderStyles.ingredientRow]}>
      <Text style={[TextStyles.paragraph, IngrStyles.name]}>{name}</Text>
      <Text style={[TextStyles.paragraph, IngrStyles.amount]}>{amount}</Text>
    </View>
  )
}

export const IngredientList = ({ ingredients, baseYield, newYield }) => {
  const ingrList = computeIngrAmounts(ingredients, baseYield, newYield);
  const formattedIngr = formatIngrAmounts(ingrList);

  return(
    <View style={{flexGrow: 1}}>
      {Object.keys(formattedIngr).map(ingrName => {
        const amount = formattedIngr[ingrName];
        return (<Ingredient name={ingrName} amount={amount} key={ingrName} />);
      })}
    </View>
  )
}
