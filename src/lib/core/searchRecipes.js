// TODO: consider a more advanced searching algorithm, don't match the middle of words?
export const getMatchingRecipes = (recipes, searchQuery) => {
  const recipeNames = Object.keys(recipes);
  const searchResults = recipeNames.reduce((matches, name) => {
    const isMatch = name.toUpperCase().includes(searchQuery.toUpperCase());
    return (isMatch ? [ ...matches, name] : matches);
  }, []);
  return(searchResults);
}

export const sortRecipes = (recipes) => {
  const sortedRecipes = [ ...recipes].sort((a, b) => {
    return a.toUpperCase().localeCompare(b.toUpperCase()) 
  })
  return(sortedRecipes);
}