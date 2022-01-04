import React from 'react';
import { View, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Colors, LayoutStyles } from '../style/stylesheets';

export const IngredientRowStyle = {
    borderBottomColor: Colors.android.gray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5
}

// ingredients is an array of arrays, each second-tier array represents a row and
// contains the component to render
const IngredientList = ({ ingredients }) => {
  return (
    <ScrollView>
      <View style={LayoutStyles.list}>
        {ingredients.map((ingredient, index) => {
          return (<View style={IngredientRowStyle} key={index}>{ingredient}</View>);
        })}
      </View>
    </ScrollView>
  )
}

export default IngredientList;
