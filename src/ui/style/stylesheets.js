import { StyleSheet } from "react-native";

export const Colors = {
  android: {
    blue: '#2f80ed',
    red: '#eb5757',
    gray: 'rgb(216, 216, 216)'
  }
}

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
    color: Colors.android.red,
    backgroundColor: 'white',
    fontSize: 14,
    border: 'red'
    // TODO: font style is roboto, add padding
  }
});

export const LayoutStyles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  screen: {
    backgroundColor: 'white',
    height: '100%'
  },
  errorRow: {
    width: '100%',
    paddingTop: '5px'
  },
  list: {
    paddingLeft: '15px',
    paddingRight: '15px'
  }
});

export const FormStyles = StyleSheet.create({
  textInput: {
    marginLeft: '2px',
    marginRight: '2px'
  },
  errorInput: {
    borderBottomColor: Colors.android.red,
    borderBottomWidth: '2px'
  }
})

export const ButtonStyles = StyleSheet.create({
  container: {
    padding: '15px',
    borderTopWidth: '1px',
    borderTopColor: Colors.android.gray
  },
  big: {
    width: '100%',
    padding: '10px',
    textAlign: 'center',
    flexGrow: 1,
    borderRadius: '7px'
  },
  small: {
    width: '50%',
    padding: '5px',
    textAlign: 'center',
    borderRadius: '7px'
  },
  blueFill: {
    color: 'white',
    backgroundColor: Colors.android.blue,
  },
  blueOutline: {
    color: Colors.android.blue,
    backgroundColor: 'white',
    borderColor: Colors.android.blue,
    borderWidth: '3px'
  },
  redOutline: {
    color: Colors.android.red,
    backgroundColor: 'white',
    borderColor: Colors.android.red,
    borderWidth: '3px'
  }
})
