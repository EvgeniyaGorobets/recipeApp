import React from "react";
import { BottomButton, Colors } from "../../../ui";

const DeleteRecipeButton = ({ openModal }) => {
  const onPress = () => {openModal(true)};
  const customStyle = { borderTopWidth: 0, paddingTop: 0}

  return (
    <BottomButton 
      text="Delete Recipe" 
      color={Colors.android.red} 
      onPress={onPress} 
      containerStyle={customStyle} />
  )
}

export default DeleteRecipeButton;
