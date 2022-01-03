import React from 'react';
import { Pressable, Text, View } from "react-native";
import { LayoutStyles, ButtonStyles, Colors } from '../style/stylesheets';

/**
 * 
 * @param {*} props The properties to pass to this button
 *   @param {*} props.text The text to show on the button
 *   @param {*} props.color The color of the button (either Colors.android.blue or Colors.android.blue)
 *   @param {*} props.onPress The callback function to fire when the button is pressed
 *   @param {*} props.containerStyle Custom styling for the View that wraps the button
 *   @param {*} props.buttonStyle Custom styling for the button
 *   @param {*} props.textStyle Custom styling for the text in the button
 * 
 * @returns 
 */
const BottomButton = (props) => {
  const { text, color, onPress, containerStyle, buttonStyle, textStyle } = props;
  const buttonColor = (color == Colors.android.red) ? ButtonStyles.redOutline : ButtonStyles.blueFill;
  const textColor = (color == Colors.android.red) ? Colors.android.red : 'white';

  return (
    <View style={[LayoutStyles.row, ButtonStyles.container, containerStyle]} >
      <Pressable
        onPress={onPress}
        style={[buttonColor, ButtonStyles.big, buttonStyle]}>
        <Text style={[{ fontSize: 22, color: textColor, textAlign: 'center' }, textStyle]}>
          {text}
        </Text>
      </Pressable>
    </View>
  )
}

export default BottomButton;
