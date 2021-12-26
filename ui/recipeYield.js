import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TextStyles, LayoutStyles, BorderStyles } from './stylesheets';
import { EmptyFieldError, NumericError } from './errors';

const YieldStyles = StyleSheet.create({
  label: {
    width: '70%',
    display: 'inline-block'
  },
  amount: {
    width: '10%',
    display: 'inline-block'
  },
  units: {
    width: '20%',
    display: 'inline-block' // should this be inline-flex? review flex
  }
})

const YieldLabel = () => {
  return (
    <Text style={[TextStyles.paragraph, YieldStyles.label]}>Recipe Yield:</Text>
  )
}

const YieldAmount = ({ recipeYield, setYield, setNumError }) => {
  const updateYieldAmount = (newAmount) => {
    setNumError(false);
    setYield({ ...recipeYield, amount: newAmount });

    // If yield amount is non-numeric, raise error
    if (isNaN(+newAmount)) {
      setNumError(true);
    }
  }

  return (
    <TextInput
      onChangeText={number => updateYieldAmount(number)}
      defaultValue={recipeYield.amount}
      keyboardType="numeric"
      style={[TextStyles.paragraph, YieldStyles.amount]}
    />
  )
}

export const RecipeYield = ({ recipeYield, setYield }) => {
  const [numericError, setNumError] = useState(false);

  return (
    <>
      <View style={[LayoutStyles.row, BorderStyles.yieldRow]}>
        <YieldLabel />
        <YieldAmount
          recipeYield={recipeYield}
          setYield={setYield}
          setNumError={setNumError} />
        <Text style={[TextStyles.paragraph, YieldStyles.units]}>{recipeYield.units}</Text>
      </View>
      {numericError && <NumericError field="Yield amount" />}
    </>
  )
}

export const EditYield = ({ recipeYield, setYield }) => {
  const [numericError, setNumError] = useState(false);
  const [emptyUnitError, setUnitError] = useState(false);

  const updateUnits = (newUnits) => {
    setUnitError(false);
    setYield({ ...recipeYield, units: newUnits });

    if (newUnits.length == 0) {
      setUnitError(true);
    }
  }

  return (
    <>
      <View style={[LayoutStyles.row, BorderStyles.yieldRow]}>
        <YieldLabel />
        <YieldAmount
          recipeYield={recipeYield}
          setYield={setYield}
          setNumError={setNumError} />
        <TextInput
          onChangeText={text => updateUnits(text)}
          defaultValue={recipeYield.units}
          style={[TextStyles.paragraph, YieldStyles.units]}
        />
      </View>
      {numericError && <NumericError field="Yield amount" />}
      {emptyUnitError && <EmptyFieldError field="Yield units" />}
    </>
  )
}
