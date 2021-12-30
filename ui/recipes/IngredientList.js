import React from 'react';
import { View, ScrollView, Text } from "react-native";
import { computeIngrAmounts, formatAmount } from '../../lib';
import { TextStyles, LayoutStyles, BorderStyles } from '../style/stylesheets';

const IngredientRow = ({ name, amount }) => {
  return (
    <View style={LayoutStyles.row}>
      <View style={BorderStyles.ingredientRow}>
      <Text style={[TextStyles.paragraph, {width: '70%'}]}>{name}</Text>
      <Text style={[TextStyles.paragraph, {width: '30%'}]}>{amount}</Text>
      </View>
    </View>
  )
}

const IngredientList = ({ ingredients, baseYield, newYield }) => {
  const ingrList = computeIngrAmounts(ingredients, baseYield, newYield);

  return(
    <ScrollView style={{flexGrow: 1}}>
      {ingrList.map((ingredient, index) => {
        const amount = formatAmount(ingredient.amount, ingredient.units);
        return (<IngredientRow name={ingredient.name} amount={amount} key={index} />);
      })}
    </ScrollView>
  )
}

export default IngredientList;
