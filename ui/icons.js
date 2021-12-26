import { Ionicons } from '@expo/vector-icons';

export const DeleteIcon = ({ iconSize }) => {
  return (
    <Ionicons 
      name="md-close" 
      size={iconSize} 
      color="rgba(0, 0, 0, 0.4)" />
  )
}

export const PlusIcon = ({ iconSize }) => {
  return (
    <Ionicons name="md-add" size={iconSize} color="black" style={{margin: 'auto'}}/>
  )
}