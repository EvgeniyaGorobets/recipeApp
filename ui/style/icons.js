// Find icon names at https://fonts.google.com/icons?selected=Material+Icons
import { Ionicons } from '@expo/vector-icons';

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
    <Ionicons name="md-search" size={iconSize} color="rgba(0, 0, 0, 0.4)" style={{margin: 'auto'}}/>
  )
}