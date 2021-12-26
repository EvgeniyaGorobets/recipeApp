import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { TextStyles, LayoutStyles } from './stylesheets';

export const RecipeName = ({ name }) => {
  return (
    <View style={LayoutStyles.row}>
      <Text style={TextStyles.title}>{name}</Text>
    </View>
  )
}

export const EditRecipeName = ({ name, setName }) => {
  return (
    <View style={LayoutStyles.row}>
      <TextInput
        placeholder="Recipe Name"
        onChangeText={text => setName(text)}
        defaultValue={name}
        style={TextStyles.title}
      />
    </View>
  )
}