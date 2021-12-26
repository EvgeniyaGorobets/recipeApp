import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, ViewRecipe, EditRecipe } from './screens'
import { getRecipes, saveRecipes } from './lib/localStorage';

// Next Steps:
// 1) Styling (do in car, load resources in advance)
// 2) Input checks (no empty recipe names, amounts are only numbers, max 3 places after decimal precision)
// 3) Recipe yield controls/functionality
// 4) Deleting ingredients and recipes
// 5) User feedback when stuff fails
// 6) Notify use when you're close to the memory limit
// 7) Backups/exports

const Stack = createNativeStackNavigator();
export const RecipesContext = React.createContext({
  recipes: {},
  updateRecipes: () => {}
});

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
    fetchRecipes()
  }, [])
  // empty dependency array indicates that this effect never needs to be rerun

  // wrapping navigator in context provider is the recommended way to pass props
  // https://reactnavigation.org/docs/hello-react-navigation/#passing-additional-props
  return (
    <RecipesContext.Provider value={{recipes, updateRecipes}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ViewRecipe" component={ViewRecipe} />
          <Stack.Screen name="EditRecipe" component={EditRecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipesContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
