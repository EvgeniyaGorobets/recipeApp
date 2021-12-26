import React, { useContext } from 'react';
import { View, Button } from "react-native";
import { RecipesContext } from '../App';
import { LayoutStyles, RecipeCard, AddRecipeCard } from '../ui';

const Home = ({ navigation }) => {
  const {recipes, updateRecipes} = useContext(RecipesContext)

  return (
    <View style={LayoutStyles.screen}>
      {recipes ?
        Object.keys(recipes).map(recipe => {
          return (<RecipeCard recipeName={recipe} key={recipe} navigate={navigation.navigate} />);
        }) : null //<Text>Loading Recipes... (but what if there are no recipes?)</Text>
      }
      <AddRecipeCard navigate={navigation.navigate} />
    </View>
  );
}

export default Home;