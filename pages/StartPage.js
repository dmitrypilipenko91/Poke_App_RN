import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import PokemonList from '../components/PokemonList';
import { store } from '../store';
import { styles } from '../styles';


export default function StartPage( {navigation} ) {
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navbar></Navbar>
        <PokemonList navigation={navigation}></PokemonList>
      </View>
    </Provider>  
  );
}