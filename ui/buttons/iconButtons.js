import React from 'react';
import { Pressable } from "react-native";
import { PlusIcon, DeleteIcon, RefreshIcon } from '../style/icons';

export const AddButton = ({ onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={[{ margin: 'auto' }, style]}>
      <PlusIcon iconSize={24} />
    </Pressable>
  )
}

export const DeleteButton = ({ onPress, style }) => {
  return (
    <Pressable style={[{ margin: 'auto' }, style]} onPress={onPress}>
      <DeleteIcon iconSize={16} />
    </Pressable>
  )
}

export const ResetButton = ({ onPress, style }) => {
  return (
    <Pressable style={[{ margin: 'auto' }, style]} onPress={onPress}>
      <RefreshIcon iconSize={20} />
    </Pressable>
  )
}