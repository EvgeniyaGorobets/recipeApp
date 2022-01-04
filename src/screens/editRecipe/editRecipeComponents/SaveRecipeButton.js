import React, { useContext } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import { BottomButton, Colors, RecipesContext } from "../../../ui";
import { updateRecipe, anyTrue } from "../../../lib";

const SaveRecipeButton = (props) => {
  const { oldName, newName, recipeYield, ingredients, showErrors, errors } = props;
  const { recipes, setRecipes } = useContext(RecipesContext);
  const navigation = useNavigation();

  const onPress = () => {
    console.log(errors)
    if (!anyTrue(Object.values(errors))) {
      const newRecipes = updateRecipe(recipes, oldName, newName, recipeYield, ingredients);
      setRecipes(newRecipes);

      // If this is a new recipe, then the user never entered the "View Recipe" screen
      //
      // navigate() will keep the "Edit Recipe" screen in the navigation stack, which will cause errors
      // because the route params will stay the same even after the context has changed, and imo it 
      // doesn't make sense for the back button to take you to the edit screen after you've saved
      //
      // replace() will removed "Edit Screen" from the stack, taking care of errors related to 
      // outdates params, and ensuring that the back button on "View Recipe" still takes user to Home
      if (oldName == "") {
        navigation.dispatch(
          StackActions.replace('ViewRecipe', { recipe: newName })
        );
      } else {
        navigation.navigate('ViewRecipe', { recipe: newName });
      }
    } else {
      showErrors(true);
    }
  }

  return (
    <BottomButton text="Save Recipe" color={Colors.android.blue} onPress={onPress} />
  )
}

export default SaveRecipeButton;
