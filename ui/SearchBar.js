import React, { useContext, useEffect } from "react";
import { View, TextInput } from "react-native";
import { LayoutStyles, TextStyles, FormStyles } from "./style/stylesheets";
import { SearchIcon } from "./style/icons";
import { RecipesContext } from ".";
import { getMatchingRecipes } from '../lib';

const SearchBar = ({ setResults }) => {
  const { recipes, setRecipes } = useContext(RecipesContext);

  // need to use a side effect so that results will update when recipes load
  useEffect(() => {
    setResults(Object.keys(recipes))
  }, [recipes]);

  const updateSearch = ( searchQuery ) => {
    const newResults = getMatchingRecipes(recipes, searchQuery);
    setResults(newResults);
  }

  return (
    <View style={LayoutStyles.row}>
      <View style={{width: '10%', marginRight: '10px'}}><SearchIcon iconSize={24} /></View>
      <TextInput 
        onChangeText={number => setYield({ ...recipeYield, amount: number })}
        placeholder="Search by recipe title"
        style={[TextStyles.paragraph, FormStyles.textInput, {fontSize: 16}]}
        onChangeText={text => updateSearch(text)}
      />
    </View>
  )
}

export default SearchBar;