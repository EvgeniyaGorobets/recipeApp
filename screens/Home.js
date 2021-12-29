import React, { useContext } from 'react';
import { View } from "react-native";
import { LayoutStyles, RecipeCard, AddRecipeCard, RecipesContext } from '../ui';

const Home = () => {
  const {recipes, setRecipes} = useContext(RecipesContext)

  return (
    <View style={LayoutStyles.screen}>
      {recipes ?
        Object.keys(recipes).map(recipe => {
          return (<RecipeCard recipeName={recipe} key={recipe} />);
        }) : null //<Text>Loading Recipes... (but what if there are no recipes?)</Text>
      }
      <AddRecipeCard />
    </View>
  );
}

export default Home;