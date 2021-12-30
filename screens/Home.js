import React, { useState } from 'react';
import { View, ScrollView } from "react-native";
import { LayoutStyles, SearchBar, RecipeCard, AddRecipeCard } from '../ui';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <View style={LayoutStyles.screen}>
      <SearchBar setResults={setRecipes} />
      <ScrollView>
        {recipes
          .sort((a, b) => { return a.toUpperCase().localeCompare(b.toUpperCase()) })
          .map(recipe => { return (<RecipeCard recipeName={recipe} key={recipe} />) })}
      </ScrollView>
      <AddRecipeCard />
    </View>
  );
}

export default Home;