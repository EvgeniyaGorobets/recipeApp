import { StyleSheet } from "react-native";

export const TextStyles = StyleSheet.create({
  paragraph: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 16
    // TODO: get roboto and make it roboto
    // also add padding
  },
  title: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 24
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
    paddingBottom: '5px',
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  screen: {
    backgroundColor: 'white',
    height: '100%',
    paddingTop: '15px',
    paddingBottom: '15px'
  }
});
