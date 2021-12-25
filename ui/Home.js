import React from 'react';
import { View, Button } from "react-native";
import { RecipesContext } from '../App';

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

const RecipeCard = (props) => {
  return (
    <Button
      onPress={() => {
        props.navigation.navigate('ViewRecipe', { recipe: props.recipeName })
      }}
      title={props.recipeName}
    />
  );
}

const Home = ({ navigation }) => {
  const recipes = useContext(RecipesContext)

  return (
    <View>
      {recipes ?
        Object.keys(recipes).map(recipe => {
          return (<RecipeCard recipeName={recipe} key={recipe} navigation={navigation} />);
        }) : null //<Text>Loading Recipes... (but what if there are no recipes?)</Text>
      }
    </View>
  );
}

export default Home;