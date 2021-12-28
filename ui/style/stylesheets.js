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
    fontSize: 12,
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
    paddingBottom: '5px',
    flexWrap: 'wrap'
  },
  screen: {
    backgroundColor: 'white',
    height: '100%',
    padding: '15px'
  },
  errorRow: {
    width: '100%',
    paddingTop: '5px'
  }
});

export const BorderStyles = StyleSheet.create({
  ingredientRow: {
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: '1px'
  },
  yieldRow: {
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: '1px',
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: '1px'
  }
})

export const FormStyles = StyleSheet.create({
  textInput: {
    marginLeft: '2px',
    marginRight: '2px'
  },
  errorInput: {
    borderBottomColor: 'red',
    borderBottomWidth: '2px'
  }
})
