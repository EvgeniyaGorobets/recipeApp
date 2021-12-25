import React, { useContext } from 'react';
import { View, Text, Button } from "react-native";
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

const RecipeYield = ({ recipeYield }) => {
  return (
    <Text>{recipeYield.amount} {recipeYield.units}</Text>
  )
}

const Ingredient = ({ ingredient }) => {
  return (
    <View>
      <Text>{ingredient.name}</Text>
      <Text>{ingredient.amount}</Text>
      <Text>{ingredient.units}</Text>
    </View>
  )
}

const ViewRecipe = ({ navigation, route }) => {
  const recipes = useContext(RecipesContext);
  const recipe = recipes[route.params.recipe]

  return (
    <RecipesContext.Consumer>
      <View>
        <Text>{recipe.name}</Text>
        <RecipeYield recipeYield={recipe.yield} />
        {recipe.ingredients.map(ingredient => {
          return (<Ingredient ingredient={ingredient} key={ingredient.name} />);
        })}
        <Button
          onPress={() => {
            navigation.navigate('EditRecipe', { recipe: route.params.recipe })
          }}
          title="Edit Recipe"
        />
      </View>
    </RecipesContext.Consumer>
  )
}

export default ViewRecipe;