import React from 'react';
import { View, ScrollView, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Colors } from '../style/stylesheets';

export const IngredientStyles = StyleSheet.create({
  list: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    flexGrow: 1
  },
  row: {
    borderBottomColor: Colors.android.gray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5
  }
})

// ingredients is an array of arrays, each second-tier array represents a row and
// contains the component to render
const IngredientList = ({ ingredients }) => {
  return (
    <KeyboardAwareScrollView >
      <View style={IngredientStyles.list}>
        {ingredients.map((ingredient, index) => {
          return (<View style={IngredientStyles.row} key={index}>{ingredient}</View>);
        })}
      </View>
    </KeyboardAwareScrollView>
  )
}

export default IngredientList;
