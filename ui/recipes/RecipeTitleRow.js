import React from 'react';
import { View } from 'react-native';
import { TextStyles, LayoutStyles } from '../style/stylesheets'

const RecipeTitleRow = ({ renderName }) => {
  return (
    <View style={[LayoutStyles.row, {width: '100%', padding: '10px'}]}>
      {renderName(TextStyles.title)}
    </View>
  )
}

export default RecipeTitleRow;