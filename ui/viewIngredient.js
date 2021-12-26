import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { computeIngrAmounts, formatIngrAmounts } from '../lib/computeIngredients';
import { TextStyles, LayoutStyles } from './stylesheets';

const ingrStyles = StyleSheet.create({
  name: {
    width: '70%',
    display: 'inline-block'
  },
  amount: {
    width: '30%',
    display: 'inline-block' // should this be inline-flex? review flex
  }
})

const Ingredient = ({ name, amount }) => {
  return (
    <View style={LayoutStyles.row}>
      <Text style={[TextStyles.paragraph, ingrStyles.name]}>{name}</Text>
      <Text style={[TextStyles.paragraph, ingrStyles.amount]}>{amount}</Text>
    </View>
  )
}

export const IngredientList = ({ ingredients, baseYield, newYield }) => {
  const ingrList = computeIngrAmounts(ingredients, baseYield, newYield);
  const formattedIngr = formatIngrAmounts(ingrList);

  return(
    <View>
      {Object.keys(formattedIngr).map(ingrName => {
        const amount = formattedIngr[ingrName];
        return (<Ingredient name={ingrName} amount={amount} key={ingrName} />);
      })}
    </View>
  )
}
