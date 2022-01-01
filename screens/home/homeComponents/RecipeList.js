import React from 'react';
import { ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LayoutStyles, TextCard } from '../../../ui';
import { sortRecipes } from '../../../lib';

const RecipeList = ({ recipes }) => {
  // TODO: may want to sort by best match instead of alphabetically
  const sortedRecipes = sortRecipes(recipes);
  const navigation = useNavigation();
  const onCardPress = (recipeName) => {
    navigation.navigate('ViewRecipe', { recipe: recipeName })
  }

  return (
    <ScrollView style={LayoutStyles.list}>
      {sortedRecipes.map(recipe => {
        return (<TextCard text={recipe} key={recipe} onPress={() => onCardPress(recipe)} />)
      })}
    </ScrollView>
  );
}

export default RecipeList;
