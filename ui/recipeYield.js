import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TextStyles, LayoutStyles, BorderStyles, FormStyles } from './stylesheets';
import { EmptyFieldError, NumericError } from './errors';

const YieldStyles = StyleSheet.create({
  label: {
    width: '60%'
  },
  amount: {
    width: '20%'
  },
  units: {
    width: '20%'
  }
})

const YieldLabel = () => {
  return (
    <Text style={[TextStyles.paragraph, YieldStyles.label]}>Recipe Yield:</Text>
  )
}

const YieldAmount = ({ recipeYield, setYield, showErrors }) => {
  const amountEmptyError = (recipeYield.amount == "");
  const amountNaNError = isNaN(+recipeYield.amount);
  const errorBorder = 
    (showErrors && (amountNaNError || amountEmptyError) ? FormStyles.errorInput : null);
  
  return (
    <TextInput
      onChangeText={number => setYield({ ...recipeYield, amount: number })}
      defaultValue={recipeYield.amount}
      keyboardType="numeric"
      placeholder="Amount"
      style={[TextStyles.paragraph, YieldStyles.amount, FormStyles.textInput,errorBorder]}
    />
  )
}

export const RecipeYield = ({ recipeYield, setYield }) => {
  return (
    <>
      <View style={[LayoutStyles.row, BorderStyles.yieldRow]}>
        <YieldLabel />
        <YieldAmount recipeYield={recipeYield} setYield={setYield} />
        <Text style={[TextStyles.paragraph, YieldStyles.units]}>{recipeYield.units}</Text>
      </View>
      {isNaN(+recipeYield.amount) && <NumericError field="Yield amount" />}
    </>
  )
}

export const EditYield = ({ recipeYield, setYield, showErrors }) => {
  const amountEmptyError = (recipeYield.amount == "");
  const amountNaNError = isNaN(+recipeYield.amount);
  const unitEmptyError = (recipeYield.units == "");
  const unitsBorder = (unitEmptyError && showErrors) ? FormStyles.errorInput : null;

  return (
    <>
      <View style={[LayoutStyles.row, BorderStyles.yieldRow]}>
        <YieldLabel />
        <YieldAmount 
          recipeYield={recipeYield} 
          setYield={setYield}
          showErrors={showErrors} />
        <TextInput
          onChangeText={text => setYield({ ...recipeYield, units: text })}
          defaultValue={recipeYield.units}
          placeholder="Units"
          style={[TextStyles.paragraph, YieldStyles.units, FormStyles.textInput, unitsBorder]}
        />
      </View>
      {showErrors && amountNaNError && <NumericError field="Yield amount" />}
      {showErrors && amountEmptyError && <EmptyFieldError field="Yield amount" />}
      {showErrors && unitEmptyError && <EmptyFieldError field="Yield units" />}
    </>
  )
}
