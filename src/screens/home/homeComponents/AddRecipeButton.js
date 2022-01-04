import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomButton, Colors } from "../../../ui";

const AddRecipeButton = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('EditRecipe', { recipe: "" })
  }

  return (
    <BottomButton text="Add New Recipe" color={Colors.android.blue} onPress={onPress} />
  )
}

export default AddRecipeButton;