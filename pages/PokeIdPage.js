import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonItem } from '../asyncActions/fetchPokemonItem';
import { fetchPokemonImage } from '../asyncActions/fetchPokemonImage';
import Navbar from '../components/Navbar';
import { store } from '../store';
import { styles } from '../styles';


export default function PokeIdPage({ route }) {
  
const { url, pokeName } = route.params;

const dispatch = useDispatch();

const addPokeItem = () => {
  dispatch (fetchPokemonItem(`${url}`)) 
};

const addPokeImage = () => {
  dispatch (fetchPokemonImage(`${url}`)) 
}

useEffect(() => {
  addPokeItem(),
  addPokeImage()
}, []);

const pokemonItem = useSelector(state => state.pokeItem.results);

const pokemonImage = useSelector(state => state.pokeImage.results);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navbar></Navbar>
        <Text>You are on the poke page of {pokeName}</Text>
        <Text>Weight - {pokemonItem.weight} kg</Text> 
        <Text>Height - {pokemonItem.height} cm</Text>
        <Image style={styles.pokeImage} source={{uri: `${pokemonImage.front_default}`}}></Image>
      </View>
    </Provider>  
  );
}