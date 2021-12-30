import React from 'react';
import { StyleSheet } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { TextStyles, FormStyles } from '../style/stylesheets';
import { EditIngrWidths } from './ingredientStyles';

const unitStyle = StyleSheet.flatten([TextStyles.paragraph, FormStyles.textInput, EditIngrWidths.units])

const unitOptions = [
  { value: 'cups' },
  { value: 'tbsp' },
  { value: 'tsp' },
  { value: 'mL' },
  { value: 'L' },
  { value: 'grams' },
  { value: 'kg' },
  { value: 'units'}
]

const UnitSelect = ({ units, setUnits }) => {
  return (
    <Dropdown
      data={unitOptions}
      labelField="value"
      valueField="value"
      value={units}
      onChange={item => {
        setUnits(item.value);
      }}
      style={unitStyle}
    />
  )
}

export default UnitSelect;