import React, { useState } from 'react';
import { View, Pressable } from "react-native";
import { LayoutStyles, BorderStyles } from '../style/stylesheets';
import { DeleteIcon } from '../style/icons';
import UnitSelect from './UnitSelect';
import IngredientAmountInput from './IngredientAmountInput';
import IngredientNameInput from './IngredientNameInput'
import { EmptyFieldError, NumericError } from '../generic/errors';
import { updateIngredient, deleteIngredient } from '../../lib';


const EditIngredientRow = (props) => {
  const { ingredients, setIngredients, index, showErrors, setErrors } = props;
  const ingredient = ingredients[index];

  // this is my attempt at currying
  const update = (property, value) => {
    const newIngredients = updateIngredient(ingredients, index, property, value);
    setIngredients(newIngredients);
    setErrors(value == "" || (property == "amount" && isNaN(+value)));
  }

  return (
    <View style={LayoutStyles.row}>
      <View style={BorderStyles.ingredientRow}>
        <Pressable
          style={{width: '7%'}}
          onPress={() => { setIngredients(deleteIngredient(ingredients, index)) }}>
          <DeleteIcon iconSize={16} />
        </Pressable>
        <IngredientNameInput
          ingredient={ingredient}
          setName={newName => update('name', newName)}
          showErrors={showErrors} />
        <IngredientAmountInput
          ingredient={ingredient}
          setAmount={newAmount => update('amount', newAmount)}
          showErrors={showErrors} />
        <UnitSelect
          units={ingredient.units}
          setUnits={newUnits => update('units', newUnits)} />
        {showErrors && ingredient.name == "" && <EmptyFieldError field={"Ingredient name"} />}
        {showErrors && ingredient.amount == "" && <EmptyFieldError field={"Ingredient amount"} />}
        {showErrors && isNaN(+ingredient.amount) && <NumericError field={"Ingredient amount"} />}
      </View>
    </View>
  )
}

export default EditIngredientRow;
