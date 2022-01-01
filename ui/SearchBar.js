import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { LayoutStyles, TextStyles, FormStyles } from "./style/stylesheets";
import { SearchIcon } from "./style/icons";

const searchBarStyle = StyleSheet.flatten([LayoutStyles.row, { 
  borderBottomColor: 'rgb(216, 216, 216)', 
  borderBottomWidth: '1px',
  padding: '10px'
}])

const SearchBar = ({ onSearch, placeholder }) => {
  return (
    <View style={searchBarStyle}>
      <View style={{width: '10%', marginRight: '10px'}}><SearchIcon iconSize={24} /></View>
      <TextInput
        placeholder={placeholder}
        onChangeText={onSearch}
        style={[TextStyles.paragraph, FormStyles.textInput]}
      />
    </View>
  )
}

export default SearchBar;