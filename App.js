import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './ui/Home';
import ViewRecipe from './ui/ViewRecipe';
import EditRecipe from './ui/EditRecipe';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ViewRecipe" component={ViewRecipe} />
        <Stack.Screen name="EditRecipe" component={EditRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
