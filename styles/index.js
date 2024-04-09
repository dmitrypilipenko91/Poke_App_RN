import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray'
    },
    pokeBlock: {
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'solid',
      borderWidth: '1px',
      marginTop: '1px',
      padding: '3px',
      backgroundColor: '#fff'
    },
    navbar: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '70px',
      backgroundColor: 'lightblue'
    },
    navbarTitle: {
      color: 'yellow', 
      fontSize: '30px', 
      fontWeight: 'bold'
    }
  });