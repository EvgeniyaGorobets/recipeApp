import { StyleSheet } from "react-native";

export const Colors = {
  android: {
    blue: '#2f80ed',
    red: '#eb5757'
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
    fontSize: 12,
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
  }
});

export const BorderStyles = StyleSheet.create({
  ingredientRow: {
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: '1px',
    flexDirection: 'row',
    width: '100%',
    paddingTop: '5px',
    paddingBottom: '5px'
  },
  yieldRow: {
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: '1px',
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: '1px'
  }
})


// move this elsewhere when you create a forms folder
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
