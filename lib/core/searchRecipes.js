export const getMatchingRecipes = (recipes, searchQuery) => {
  const recipeNames = Object.keys(recipes);
  const searchResults = recipeNames.reduce((matches, name) => {
    const isMatch = name.toUpperCase().includes(searchQuery.toUpperCase());
    return (isMatch ? [ ...matches, name] : matches);
  }, []);
  return(searchResults);
}