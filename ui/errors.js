import React from 'react';
import { Text } from 'react-native';
import { TextStyles } from './stylesheets';

export const EmptyFieldError = ({ field }) => {
  return (
    <Text style={TextStyles.error}>{field} cannot be empty.</Text>
  )
}

export const NumericError = ({ field }) => {
  return (
    <Text style={TextStyles.error}>{field} must be a number.</Text>
  )
}