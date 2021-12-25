import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './ui/Home';
import ViewRecipe from './ui/ViewRecipe';
import EditRecipe from './ui/EditRecipe';
import { getRecipes } from './businessLogic/storage';

const Stack = createNativeStackNavigator();
export const RecipesContext = React.createContext(null);

export default function App() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const storedRecipes = await getRecipes();
      setRecipes(storedRecipes);
      console.log(recipes)
    }
    fetchRecipes()
  }, [])
  // empty dependency array indicates that this effect never needs to be rerun

  // wrapping navigator in context provider is the recommended way to pass props
  // https://reactnavigation.org/docs/hello-react-navigation/#passing-additional-props
  return (
    <RecipesContext.Provider value={recipes}>
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
