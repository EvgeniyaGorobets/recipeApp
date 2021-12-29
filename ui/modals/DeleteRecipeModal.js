import React, { useContext } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { ModalButton } from "../generic/buttons";
import { LayoutStyles, TextStyles, Colors } from "../style/stylesheets";
import { RecipesContext } from '../../App';
import { deleteRecipe } from "../../lib";

const DeleteRecipeModal = ({visible, setVisible, recipeName, navigate}) => {
  const {recipes, updateRecipes} = useContext(RecipesContext);

  const yesDelete = () => {
    updateRecipes(deleteRecipe(recipes, recipeName));
    setVisible(false);
    navigate('Home'); 
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
  container: { //this positions the modal on the page
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modal: { // this is styling for the modal itself
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
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default DeleteRecipeModal;