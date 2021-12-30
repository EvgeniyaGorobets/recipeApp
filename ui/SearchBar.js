import React, { useState } from "react";
import { View, Pressable, TextInput } from "react-native";
import { LayoutStyles, TextStyles, FormStyles } from "./style/stylesheets";
import { SearchIcon } from "./style/icons";

const SearchBar = () => {
  const [text, setText] = useState('');

  return (
    <View style={LayoutStyles.row}>
      <View style={{width: '10%', marginRight: '10px'}}><SearchIcon iconSize={24} /></View>
      <TextInput 
        onChangeText={number => setYield({ ...recipeYield, amount: number })}
        placeholder="Search by recipe title"
        style={[TextStyles.paragraph, FormStyles.textInput, {fontSize: 16}]}
        value={text}
        onChangeText={newText => setText(newText)}
      />
    </View>
  )
}

export default SearchBar;