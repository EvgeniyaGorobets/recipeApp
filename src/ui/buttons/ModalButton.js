import React from 'react';
import { Pressable, Text, StyleSheet } from "react-native";
import { ButtonStyles, Colors } from '../style/stylesheets';

const ModalButton = ({ text, color, onPress }) => {
  const buttonColor = (color == Colors.android.red) ? ButtonStyles.redOutline : ButtonStyles.blueOutline;
  const style = StyleSheet.flatten([buttonColor, ButtonStyles.big, { marginTop: 10 }]);

  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={{ fontSize: 16, color: color, textAlign: 'center' }}>{text}</Text>
    </Pressable>
  )
}

export default ModalButton;
