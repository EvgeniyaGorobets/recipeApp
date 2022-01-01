import React from 'react';
import { Text } from 'react-native';
import { RecipeTitleRow } from '../../../ui';

const RecipeName = ({ name }) => {
  const renderName = (style) => {
    return(<Text style={style}>{name}</Text>);
  }

  return (
    <RecipeTitleRow renderName={renderName} />
  )
}

export default RecipeName;