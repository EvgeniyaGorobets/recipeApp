import React from 'react';
import { Text, View } from 'react-native';
import { TextStyles, LayoutStyles } from '.';

const ErrorRow = ({ text }) => {
  return (
    <View style={LayoutStyles.errorRow}>
      <Text style={TextStyles.error}>{text}</Text>
    </View>
  )
}

const EmptyFieldError = ({ field }) => {
  return (<ErrorRow text={field + " cannot be empty."} />);
}

const NumericError = ({ field }) => {
  return (<ErrorRow text={field + " must be a number."} />);
}

const DuplicateNameError = ({ name }) => {
  return (<ErrorRow text={"A recipe called '" + name + "' already exists."} />);
}

const ErrorView = ({ errors }) => {
  return (
    <View>
      {errors.map(error => {
        if (error.errorType == "EmptyFieldError") {
          return (<EmptyFieldError field={error.field} key={0} />)
        } else if (error.errorType == "NumericError") {
          return (<NumericError field={error.field} key={1} />)
        } else if (error.errorType == "DuplicateNameError") {
          return (<DuplicateNameError name={error.name} key={2} />)
        }
      })}
    </View>
  )
}

export default ErrorView;
