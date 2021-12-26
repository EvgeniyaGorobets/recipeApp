import React from 'react';
import { Text, View } from 'react-native';
import { TextStyles, LayoutStyles } from './stylesheets';

export const EmptyFieldError = ({ field }) => {
  return (
    <View style={LayoutStyles.row}>
      <Text style={TextStyles.error}>{field} cannot be empty.</Text>
    </View>
  )
}

export const NumericError = ({ field }) => {
  return (
    <View style={LayoutStyles.row}>
      <Text style={TextStyles.error}>{field} must be a number.</Text>
    </View>
  )
}

export const DuplicateNameError = ({ name }) => {
  return (
    <View style={LayoutStyles.row}>
      <Text style={TextStyles.error}>A recipe called '{name}' already exists.</Text>
    </View>
  )
}