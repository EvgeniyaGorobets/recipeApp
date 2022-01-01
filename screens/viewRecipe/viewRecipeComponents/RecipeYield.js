import React from 'react';
import { Text } from "react-native";
import { useEffect } from 'react/cjs/react.development';
import { YieldRow, ResetButton } from "../../../ui";

const RecipeYield = ({ recipeYield, setYield, baseYield }) => {
  const updateAmount = (newAmount) => {
    setYield({ ...recipeYield, "amount": newAmount});
  }

  const resetAmount = () => {
    updateAmount(baseYield);
  }

  return (
    <YieldRow 
      recipeYield={recipeYield} 
      setYield={updateAmount} 
      renderUnits={style => <Text style={style}>{recipeYield.units}</Text>}
      showErrors={true}
      children={<ResetButton onPress={resetAmount} style={{width: '7%'}} />} />
  )
}

export default RecipeYield;
