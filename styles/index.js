import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray'
    },
    pokeList: {
      alignItems: 'center'
    },
    pokeBlock: {
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '3px',
      marginTop: '3px',
      padding: '3px',
      backgroundColor: '#fff',
      width: '30%'
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
    },
    pokeImage: {
      width: '200px',
      height: '200px'
    }
  });