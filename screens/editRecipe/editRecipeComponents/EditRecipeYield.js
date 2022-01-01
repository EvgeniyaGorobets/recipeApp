import React from 'react';
import { checkRecipeYield } from '../../../lib';
import { YieldRow, SafeTextInput } from "../../../ui";

const EditRecipeYield = ({ recipeYield, setYield, showErrors, setErrors }) => {
  const updateYield = (property, value) => {
    const newYield = { ...recipeYield, [property]: value };
    setYield(newYield);
    const errors = checkRecipeYield(newYield);
    console.log("Recipe yield errors: ", errors);
    setErrors(errors.length > 0);
  }

  const renderUnits = (style) => {
    return (
      <SafeTextInput
        value={recipeYield.units}
        setValue={(units) => updateYield("units", units)}
        placeholder="Units"
        showErrors={showErrors}
        style={style} />
    )
  }

  return (
    <YieldRow
      recipeYield={recipeYield}
      setYield={(amount) => updateYield("amount", amount)}
      showErrors={true}
      renderUnits={renderUnits} />
  )
}

export default EditRecipeYield;
