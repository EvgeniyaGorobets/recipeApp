import React from 'react';
import { Button, StyleSheet } from "react-native";

export const RecipeCard = ({ recipeName, navigate }) => {
  return (
    <Button
      onPress={() => {navigate('ViewRecipe', { recipe: recipeName })}}
      title={recipeName}
    />
  );
}