import React, { useContext } from 'react';
import { View } from "react-native";
import { LayoutStyles, SearchBar, RecipeCard, AddRecipeCard, RecipesContext } from '../ui';

const Home = () => {
  const {recipes, setRecipes} = useContext(RecipesContext)

  return (
    <View style={LayoutStyles.screen}>
      <SearchBar />
      {recipes ?
        Object.keys(recipes)
          .sort((a, b) => {return a.toUpperCase().localeCompare(b.toUpperCase())})
          .map(recipe => {return (<RecipeCard recipeName={recipe} key={recipe} />)}) 
          : null
      }
      <AddRecipeCard />
    </View>
  );
}

export default Home;