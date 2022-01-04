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
    fontSize: 18
    // TODO: get roboto and make it roboto
  },
  title: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 24,
    flexGrow: 1,
    width: '100%'
    // TODO: font style is roboto, add padding
  },
  error: {
    color: Colors.android.red,
    backgroundColor: 'white',
    fontSize: 14,
    borderColor: 'red'
    // TODO: font style is roboto, add padding
  }
});

export const LayoutStyles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingRight: 15
  },
  screen: {
    backgroundColor: 'white',
    height: '100%'
  },
  errorRow: {
    width: '100%',
    paddingTop: 5
  },
  list: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    flexGrow: 1
  }
});

export const FormStyles = StyleSheet.create({
  textInput: {
    marginLeft: 2,
    marginRight: 2
  },
  errorInput: {
    borderBottomColor: Colors.android.red,
    borderBottomWidth: 2
  }
})

export const ButtonStyles = StyleSheet.create({
  container: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: Colors.android.gray
  },
  big: {
    width: '100%',
    padding: 10,
    flexGrow: 1,
    borderRadius: 7
  },
  small: {
    width: '50%',
    padding: 5,
    borderRadius: 7
  },
  blueFill: {
    color: 'white',
    backgroundColor: Colors.android.blue,
  },
  blueOutline: {
    color: Colors.android.blue,
    backgroundColor: 'white',
    borderColor: Colors.android.blue,
    borderWidth: 3
  },
  redOutline: {
    color: Colors.android.red,
    backgroundColor: 'white',
    borderColor: Colors.android.red,
    borderWidth: 3
  }
})

