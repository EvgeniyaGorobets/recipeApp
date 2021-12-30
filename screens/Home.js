import React, { useState } from 'react';
import { View } from "react-native";
import { LayoutStyles, SearchBar, RecipeCard, AddRecipeCard } from '../ui';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <View style={LayoutStyles.screen}>
      <SearchBar setResults={setRecipes} />
      {recipes
        .sort((a, b) => { return a.toUpperCase().localeCompare(b.toUpperCase()) })
        .map(recipe => { return (<RecipeCard recipeName={recipe} key={recipe} />) })}
      <AddRecipeCard />
    </View>
  );
}

export default Home;