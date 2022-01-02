import React from "react";
import { SearchBar } from "../../../ui";
import { getMatchingRecipes } from '../../../lib';

const SearchRecipes = ({ setResults, recipes }) => {
  const updateSearch = ( searchQuery ) => {
    const newResults = getMatchingRecipes(recipes, searchQuery);
    setResults(newResults);
  }

  return (
    <SearchBar onSearch={updateSearch} placeholder="Search by recipe title" />
  )
}

export default SearchRecipes;