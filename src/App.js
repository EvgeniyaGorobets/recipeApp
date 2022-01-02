import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, ViewRecipe, EditRecipe } from './screens'
import { getRecipes, saveRecipes } from './lib';
import { RecipesContext } from './ui';

// Next Steps:
// 1) Consider more refactoring (maybe look at examples)
// 3) Add input checks so that numbers have only 3 digits after decimal
// 4) add cups/tsp conversions
// 6) Notify use when you're close to the memory limit
// 7) Backups/exports

const Stack = createNativeStackNavigator();

export default function App() {
  const [recipes, setRecipes] = useState({});
  const updateRecipes = (newRecipes) => {
    setRecipes(newRecipes); // updates the context
    saveRecipes(newRecipes); // saves to local storage
  } 

  useEffect(() => {
    const fetchRecipes = async () => {
      const storedRecipes = await getRecipes();
      setRecipes(storedRecipes);
    }
    fetchRecipes();
  }, [])
  // empty dependency array indicates that this effect never needs to be rerun

  // wrapping navigator in context provider is the recommended way to pass props
  // https://reactnavigation.org/docs/hello-react-navigation/#passing-additional-props
  return (
    <RecipesContext.Provider value={{recipes: recipes, setRecipes: updateRecipes}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ title: "Alexey's Recipe App", headerTitleAlign: 'center' }}/>
          <Stack.Screen name="ViewRecipe" component={ViewRecipe} options={{ title: 'View Recipe' }} />
          <Stack.Screen name="EditRecipe" component={EditRecipe} options={{ title: 'Edit Recipe' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipesContext.Provider>
  );
}
