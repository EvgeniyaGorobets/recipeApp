import React, { useState, useContext } from 'react';
import { View } from "react-native";
import { RecipesContext } from '../App';
import { EditRecipeName, EditYield, LayoutStyles, SaveButton, EditIngredientList, 
  DeleteRecipeButton, DeleteRecipeModal } from '../ui';

const EditRecipe = ({ navigation, route }) => {
  const {recipes, setRecipes} = useContext(RecipesContext);
  const recipe = recipes[route.params.recipe];
  const initialName = recipe.name;

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
        oldName={initialName} 
        newName={recipeName}
        recipeYield={recipeYield}
        ingredients={ingredients}
        navigate={navigation.navigate}
        showErrors={setErrorVisibility}
      />
      <DeleteRecipeButton openModal={setModalVisible} />
      <DeleteRecipeModal 
        visible={modalVisible} 
        setVisible={setModalVisible} 
        recipeName={recipeName}
        navigate={navigation.navigate} />
    </View>
  )
}

export default EditRecipe;