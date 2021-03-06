import React, { useState, useContext } from 'react';
import { View } from "react-native";
import { LayoutStyles, DeleteRecipeModal, RecipesContext, HideOnKeyboardOpen } from '../../ui';
import { EditRecipeName, EditRecipeYield, EditIngredients, SaveRecipeButton, DeleteRecipeButton } from './editRecipeComponents';
import { newRecipe } from '../../lib';

const EditRecipe = ({ route }) => {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const recipe = route.params.recipe ? recipes[route.params.recipe] : newRecipe();

  const [recipeName, setName] = useState(recipe.name);
  const [recipeYield, setYield] = useState(recipe.yield);
  const [ingredients, setIngr] = useState(recipe.ingredients);
  const [showErrors, setErrorVisibility] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [errors, setErrors] = useState({
    nameErrors: recipeName == "",
    yieldErrors: false,
    ingredientErrors: false
  });
  const updateErrors = (errorType, value) => {
    setErrors({ ...errors, [errorType]: value });
  }

  return (
    <View style={LayoutStyles.screen}>
      <EditRecipeName
        name={recipeName}
        setName={setName}
        oldName={route.params.recipe}
        showErrors={showErrors}
        setErrors={err => updateErrors("nameErrors", err)} />
      <EditRecipeYield
        recipeYield={recipeYield}
        setYield={setYield}
        showErrors={showErrors}
        setErrors={err => updateErrors("yieldErrors", err)} />
      <EditIngredients
        ingredients={ingredients}
        setIngredients={setIngr}
        showErrors={showErrors}
        setRecipeErrors={err => updateErrors("ingredientErrors", err)} />
      <HideOnKeyboardOpen
        children={[
          <SaveRecipeButton
            oldName={route.params.recipe}
            newName={recipeName}
            recipeYield={recipeYield}
            ingredients={ingredients}
            showErrors={setErrorVisibility}
            errors={errors}
            key={0}
          />,
          <DeleteRecipeButton openModal={setModalVisible} key={1} />
        ]} />
      <DeleteRecipeModal
        visible={modalVisible}
        setVisible={setModalVisible}
        recipeName={recipeName} />
    </View>
  )
}

export default EditRecipe;