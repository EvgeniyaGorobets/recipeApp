import React from 'react';
import { SafeNumberInput } from '../forms';

const IngredientAmountInput = ({ ingredient, setAmount, showErrors }) => {
  return (
    <SafeNumberInput    
      value={ingredient.amount} 
      setValue={setAmount}
      placeholder="Amount"
      showErrors={showErrors}
      style={{width: '20%'}}
    />
  )
}

export default IngredientAmountInput;
