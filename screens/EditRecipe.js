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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={LayoutStyles.screen}>
      <EditRecipeName name={recipeName} setName={setName} showErrors={showErrors} />
      <EditYield recipeYield={recipeYield} setYield={setYield} showErrors={showErrors} />
      <EditIngredientList ingredients={ingredients} setIngredients={setIngr} showErrors={showErrors} />
      <SaveButton 
        oldName={route.params.recipe} 
        newName={recipeName}
        recipeYield={recipeYield}
        ingredients={ingredients}
        showErrors={setErrorVisibility}
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