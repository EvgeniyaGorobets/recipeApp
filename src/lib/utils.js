export const anyTrue = (list) => {
  return( list.reduce((a, b) => a || b) );
}