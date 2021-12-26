import { StyleSheet } from "react-native";

export const TextStyles = StyleSheet.create({
  paragraph: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 16
    // TODO: get roboto and make it roboto
  },
  title: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 24,
    flexGrow: 1
    // TODO: font style is roboto, add padding
  },
  error: {
    color: 'red',
    backgroundColor: 'white',
    fontSize: 16,
    border: 'red'
    // TODO: font style is roboto, add padding
  },
  button: {
    color: 'white',
    fontSize: 20
  }
});

export const LayoutStyles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: '5px',
    paddingBottom: '5px'
  },
  screen: {
    backgroundColor: 'white',
    height: '100%',
    padding: '15px'
  }
});

export const BorderStyles = StyleSheet.create({
  ingredientRow: {
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: '1px'
  },
  yieldRow: {

  },
  titleRow: {}
})
