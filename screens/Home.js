import React, { useContext } from 'react';
import { View, Button } from "react-native";
import { RecipesContext } from '../App';
import { LayoutStyles, RecipeCard } from '../ui';

const testRecipes = {
  "Chocolate Chip Cookies": {
    name: "Chocolate Chip Cookies",
    yield: {
      amount: "24",
      units: "cookies"
    },
    ingredients: [
      {
        name: "flour",
        amount: "2",
        units: "cups"
      },
      {
        name: "sugar",
        amount: "1",
        units: "cups"
      },
      {
        name: "vanilla extract",
        amount: "1",
        units: "tsp"
      }
    ]
  },
  "Apple Pie": {
    name: "Apple Pie",
  },
  "Walnut Brownies": {
    name: "Walnut Brownies",
  }
}

// consider replacing buttons with TouchableHighlight if you want to use a real icon
const AddRecipe = ({ navigation }) => {
  return (
    <Button 
      onPress={() => {
        navigation.navigate('EditRecipe', { recipe: "" })
      }}
      title="+"
    />
  )
}

const Home = ({ navigation }) => {
  const {recipes, updateRecipes} = useContext(RecipesContext)

  return (
    <View style={LayoutStyles.screen}>
      {recipes ?
        Object.keys(recipes).map(recipe => {
          return (<RecipeCard recipeName={recipe} key={recipe} navigate={navigation.navigate} />);
        }) : null //<Text>Loading Recipes... (but what if there are no recipes?)</Text>
      }
      <AddRecipe navigation={navigation} />
    </View>
  );
}

export default Home;