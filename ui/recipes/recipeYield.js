import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextStyles, LayoutStyles, BorderStyles } from '../style/stylesheets';
import { EmptyFieldError, NumericError } from '../generic/errors';
import { SafeNumberInput, SafeTextInput } from '../forms';

const labelStyle = StyleSheet.flatten([TextStyles.paragraph, {width: '50%', flexGrow: 1}]);

const YieldStyles = StyleSheet.create({
  amount: {
    width: '20%'
  },
  units: {
    width: '20%'
  }
})

const YieldLabel = () => {
  return (
    <Text style={labelStyle}>Recipe Yield:</Text>
  )
}

const YieldAmount = ({ recipeYield, setYield, showErrors }) => {
  return (
    <SafeNumberInput
      value={recipeYield.amount} 
      setValue={setYield}
      placeholder="Amount"
      showErrors={showErrors}
      style={{width: '20%'}}
    />
  )
}

export const RecipeYield = ({ recipeYield, setYield }) => {
  return (
    <View style={[LayoutStyles.row, BorderStyles.yieldRow]}>
      <YieldLabel />
      <YieldAmount recipeYield={recipeYield} setYield={setYield} showErrors={true} />
      <Text style={[TextStyles.paragraph, YieldStyles.units]}>{recipeYield.units}</Text>
      {isNaN(+recipeYield.amount) && <NumericError field="Yield amount" />}
    </View>
  )
}

// does the component remount or rerender every time the props change?
export const EditYield = ({ recipeYield, setYield, showErrors, setErrors }) => {

  const updateYield = (property, value) => {
    setYield({ ...recipeYield, [property]: value });
    setErrors(value == "" || (property == "amount" && isNaN(+value)));
  }

  return (
    <View style={[LayoutStyles.row, BorderStyles.yieldRow]}>
      <YieldLabel />
      <YieldAmount
        recipeYield={recipeYield}
        setYield={amount => updateYield("amount", amount)}
        showErrors={showErrors} />
      <SafeTextInput
        value={recipeYield.units} 
        setValue={units => updateYield("units", units)}
        placeholder="Units"
        showErrors={showErrors}
        style={{width: '25%'}} />
      {showErrors && isNaN(+recipeYield.amount) && <NumericError field="Yield amount" />}
      {showErrors && recipeYield.amount == "" && <EmptyFieldError field="Yield amount" />}
      {showErrors && recipeYield.units == "" && <EmptyFieldError field="Yield units" />}
    </View>
  )
}
