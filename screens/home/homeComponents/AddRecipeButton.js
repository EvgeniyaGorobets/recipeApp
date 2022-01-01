import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomButton, RecipesContext, Colors } from "../../../ui";
import { addRecipe } from "../../../lib";

const AddRecipeButton = () => {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const navigation = useNavigation();

  const onPress = () => {
    setRecipes(addRecipe(recipes));
    navigation.navigate('EditRecipe', { recipe: "" })
  }

  return (
    <BottomButton text="Add New Recipe" color={Colors.android.blue} onPress={onPress} />
  )
}

export default AddRecipeButton;