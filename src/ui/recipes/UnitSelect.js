import React from 'react';
import { StyleSheet } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { TextStyles, FormStyles } from '../style/stylesheets';

const unitStyle = StyleSheet.flatten([TextStyles.paragraph, FormStyles.textInput, {width: '20%'}])

const unitOptions = [
  { value: 'cups' },
  { value: 'tbsp' },
  { value: 'tsp' },
  { value: 'mL' },
  { value: 'L' },
  { value: 'gr' },
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