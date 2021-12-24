import React, { useState } from 'react';
import { View, Button, TextInput } from "react-native";

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

const EditRecipe = ({ navigation, route }) => {
    const recipe = testRecipes[route.params.recipe]
    const [recipeName, setName] = useState(recipe.name);

    return (
        <View>
            <TextInput
                placeholder="Recipe Name"
                onChangeText={text => setName(text)}
                defaultValue={recipeName}
            />
            <Button
                onPress={() => { 
                    navigation.navigate('ViewRecipe', {recipe: route.params.recipe}) 
                }}
                title="Save Recipe"
            />
        </View>
    )
}

export default EditRecipe;