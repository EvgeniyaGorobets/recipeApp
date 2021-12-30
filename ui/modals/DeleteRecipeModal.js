import React, { useContext } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ModalButton } from "../generic/buttons";
import { LayoutStyles, TextStyles, Colors } from "../style/stylesheets";
import RecipesContext from '../RecipesContext';
import { deleteRecipe } from "../../lib";

const DeleteRecipeModal = ({visible, setVisible, recipeName}) => {
  const {recipes, setRecipes} = useContext(RecipesContext);
  const navigation = useNavigation();

  const yesDelete = () => {
    setRecipes(deleteRecipe(recipes, recipeName));
    setVisible(false);
    navigation.navigate('Home'); 
  }

  return (
      <Modal
        animationType="none"
        transparent={true}
        visible={visible} >
        <View style={ModalStyles.container}>
          <View style={ModalStyles.modal}>
            <Text style={[TextStyles.paragraph, {textAlign: 'center', marginBottom: '10px'}]}>
              Are you sure you want to delete your {recipeName} recipe?
            </Text>
            <View style={LayoutStyles.row}>
              <ModalButton 
                text="No, do not delete"
                color={Colors.android.blue}
                onPress={() => setVisible(false)} />
              <ModalButton
                text="Yes, delete"
                color={Colors.android.red}
                onPress={yesDelete} />
            </View>
          </View>
        </View>
      </Modal>
  );
};


const ModalStyles = StyleSheet.create({
  //this positions the modal on the page
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  // this is styling for the modal itself
  modal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});

export default DeleteRecipeModal;