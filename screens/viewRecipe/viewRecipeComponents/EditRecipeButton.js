import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomButton, Colors } from "../../../ui";

const EditRecipeButton = ({ recipeName }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('EditRecipe', { recipe: recipeName })
  }

  return (
    <BottomButton text="Edit Recipe" color={Colors.android.blue} onPress={onPress} />
  )
}

export default EditRecipeButton;
