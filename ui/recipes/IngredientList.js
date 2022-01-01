import React from 'react';
import { View, ScrollView, StyleSheet } from "react-native";
import { Colors } from '../style/stylesheets';

export const IngredientStyles = StyleSheet.create({
  list: {
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '5px',
    paddingBottom: '5px',
    flexGrow: 1
  },
  row: {
    borderBottomColor: Colors.android.gray,
    borderBottomWidth: '1px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingTop: '5px',
    paddingBottom: '5px'
  }
})

// ingredients is an array of arrays, each second-tier array represents a row and
// contains the component to render
const IngredientList = ({ ingredients }) => {
  return (
    <ScrollView style={IngredientStyles.list}>
      {ingredients.map((ingredient, index) => {
        return (<View style={IngredientStyles.row} key={index}>{ingredient}</View>);
      })}
    </ScrollView>
  )
}

export default IngredientList;
