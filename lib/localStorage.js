import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: consider only loading one recipe at a time and storing a separate thing with their names
// if the app gets too slow and saving one recipe at a time

const getRecipes = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@recipes');
    const recipes = jsonValue ? JSON.parse(jsonValue) : {};
    return(recipes);
  } catch(e) {
    // error reading value
    console.log(e)
  }
}

const saveRecipes = async (recipes) => {
  try {
    const jsonValue = JSON.stringify(recipes)
    await AsyncStorage.setItem('@recipes', jsonValue)
  } catch (e) {
    // saving error
    console.log(e)
  }
}

export { getRecipes, saveRecipes };