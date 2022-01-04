import React, { useState, useEffect } from 'react';
import { View, Keyboard } from "react-native";

const HideOnKeyboardOpen = ({ children }) => {
  [visible, setVisible] = useState(true);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      console.log('I am hiding now')
      setVisible(false);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      console.log('I am reappearing now')
      setVisible(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  return (
    <>
      {visible && <View>{children}</View>}
    </>
  )
}

export default HideOnKeyboardOpen;
