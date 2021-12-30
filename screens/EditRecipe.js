import React, { useState, useContext } from 'react';
import { View } from "react-native";
import { EditRecipeName, EditYield, LayoutStyles, SaveButton, EditIngredientList, 
  DeleteRecipeButton, DeleteRecipeModal, RecipesContext } from '../ui';

const EditRecipe = ({ route }) => {
  const {recipes, setRecipes} = useContext(RecipesContext);
  const recipe = recipes[route.params.recipe];

  const [recipeName, setName] = useState(recipe.name);
  const [recipeYield, setYield] = useState(recipe.yield);
  const [ingredients, setIngr] = useState(recipe.ingredients);
  const [showErrors, setErrorVisibility] = useState(false);
  const [errors, setErrors] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={LayoutStyles.screen}>
      <EditRecipeName name={recipeName} setName={setName} oldName={route.params.recipe} showErrors={showErrors} setErrors={setErrors} />
      <EditYield recipeYield={recipeYield} setYield={setYield} showErrors={showErrors} setErrors={setErrors} />
      <EditIngredientList ingredients={ingredients} setIngredients={setIngr} showErrors={showErrors} setErrors={setErrors} />
      <SaveButton 
        oldName={route.params.recipe} 
        newName={recipeName}
        recipeYield={recipeYield}
        ingredients={ingredients}
        showErrors={setErrorVisibility}
        errors={errors}
      />
      <DeleteRecipeButton openModal={setModalVisible} />
      <DeleteRecipeModal 
        visible={modalVisible} 
        setVisible={setModalVisible} 
        recipeName={recipeName} />
    </View>
  )
}

export default EditRecipe;