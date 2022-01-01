// Find icon names at 
// https://fonts.google.com/icons?selected=Material+Icons
// https://ionic.io/ionicons/v4
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './stylesheets';

export const DeleteIcon = ({ iconSize }) => {
  return (
    <Ionicons 
      name="md-close" 
      size={iconSize} 
      color="rgba(0, 0, 0, 0.4)"
      style={{margin: 'auto'}} />
  )
}

export const PlusIcon = ({ iconSize }) => {
  return (
    <Ionicons name="md-add" size={iconSize} color="black" style={{margin: 'auto'}}/>
  )
}


export const SearchIcon = ({ iconSize }) => {
  return (
    <Ionicons name="md-search" size={iconSize} color={Colors.android.gray} style={{margin: 'auto'}}/>
  )
}


export const RefreshIcon = ({ iconSize }) => {
  return (
    <Ionicons name="refresh" size={iconSize} color='rgb(160, 160, 160)' style={{margin: 'auto'}}/>
  )
}