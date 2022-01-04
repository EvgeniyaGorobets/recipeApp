import React, { useState, useContext, useEffect } from 'react';
import { View } from "react-native";
import { LayoutStyles, RecipesContext, HideOnKeyboardOpen } from '../../ui';
import { SearchRecipes, RecipeList, AddRecipeButton } from './homeComponents';

const Home = () => {
  const [searchResults, setResults] = useState([]);
  const { recipes, setRecipes } = useContext(RecipesContext);

  // need to use a side effect because recipes load asynchronously
  useEffect(() => {
    setResults(Object.keys(recipes))
  }, [recipes]);

  return (
    <View style={LayoutStyles.screen}>
      <SearchRecipes setResults={setResults} recipes={recipes} />
      <RecipeList recipes={searchResults} />
      <HideOnKeyboardOpen children={<AddRecipeButton />} />
    </View>
  );
}

export default Home;