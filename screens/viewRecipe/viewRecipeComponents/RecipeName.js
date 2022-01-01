import React from 'react';
import { Text, View } from 'react-native';
import { TextStyles, LayoutStyles } from '../../../ui';

const RecipeName = ({ name }) => {
  return (
    <View style={LayoutStyles.row}>
      <Text style={TextStyles.title}>{name}</Text>
    </View>
  )
}

export default RecipeName;