import { StyleSheet } from "react-native";

// determines the spacing of each EditIngredientRow
export const EditIngrWidths = StyleSheet.create({
  delete: {
    width: '7%',
    margin: 'auto' //move this
  },
  name: {
    width: '50%'
  },
  amount: {
    width: '20%'
  },
  units: {
    width: '20%'
  }
});

// determines the spacing of each IngredientRow
export const IngrWidths = StyleSheet.create({
  name: {
    width: '70%'
  },
  amount: {
    width: '30%'
  }
})