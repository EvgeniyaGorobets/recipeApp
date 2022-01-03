import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextStyles, LayoutStyles, Colors } from '../style/stylesheets';
import ErrorView from '../ErrorView';
import { SafeNumberInput } from '../forms';
import { checkRecipeYield } from '../../lib';

const YieldStyles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.android.gray,
    borderBottomWidth: 1,
    borderTopColor: Colors.android.gray,
    borderTopWidth: 1,
    padding: 8,
    alignItems: 'center'
  }, 
  label: {
    width: '40%', 
    flexGrow: 1
  },
  units: {
    width: '25%'
  }
})

const YieldLabel = () => {
  const labelStyle = StyleSheet.flatten([TextStyles.paragraph, YieldStyles.label]);
  return (
    <Text style={labelStyle}>Recipe Yield:</Text>
  )
}

/**
 * 
 * @param {*} props The properties to pass to this component
 *  @param {*} props.recipeYield The recipe yield object being represented
 *  and updated in this row
 *  @param {*} props.setYield A callback function that updates props.recipeYield
 *  @param {*} props.renderUnits A render function for the yield units. The 
 *  render function must take a style argument.
 *  @param {*} children Any other components that should be rendered in the YieldRow
 *  @param {bool} props.showErrors A boolean indicating whether or not to show
 *  errors detected in the YieldRow.
 * 
 * @returns 
 */
const YieldRow = ({recipeYield, setYield, renderUnits, children, showErrors}) => {
  const unitStyle = StyleSheet.flatten([TextStyles.paragraph, YieldStyles.units]);
  const yieldUnits = renderUnits(unitStyle)

  return (
    <View style={[LayoutStyles.row, YieldStyles.container]}>
      <YieldLabel />
      <SafeNumberInput value={recipeYield.amount} setValue={setYield} showErrors={showErrors} />
      {yieldUnits}
      {children}
      {showErrors && <ErrorView errors={checkRecipeYield(recipeYield)} />}
    </View>
  )
}

export default YieldRow;
