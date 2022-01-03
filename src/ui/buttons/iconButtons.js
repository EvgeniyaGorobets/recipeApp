import React from 'react';
import { Pressable } from "react-native";
import { PlusIcon, DeleteIcon, RefreshIcon } from '../style/icons';

const IconButtonStyle = {
  margin: 'auto',
  justifyContent: 'center',
  alignItems: 'center'
}

export const AddButton = ({ onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={[IconButtonStyle, style]}>
      <PlusIcon iconSize={24} />
    </Pressable>
  )
}

export const DeleteButton = ({ onPress, style }) => {
  return (
    <Pressable style={[IconButtonStyle, style]} onPress={onPress}>
      <DeleteIcon iconSize={16} />
    </Pressable>
  )
}

export const ResetButton = ({ onPress, style }) => {
  return (
    <Pressable style={[IconButtonStyle, style]} onPress={onPress}>
      <RefreshIcon iconSize={20} />
    </Pressable>
  )
}