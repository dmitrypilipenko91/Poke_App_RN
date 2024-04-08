import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../asyncActions/fetchPokemonList";
import { styles } from "../styles";

const PokemonList = () => {
    const dispatch = useDispatch();
      
    const pokemonList = useSelector(state => state.pokeList.results);

    const addPokeList = () => {
        dispatch (fetchPokemonList()) 
    };

    useEffect(() => {
        addPokeList()
    }, []);
    
    return(
      <ScrollView>
        <View>{pokemonList.map(poke => 
          <View style={styles.pokeBlock} key={poke.name}>
            <Text>{poke.name}</Text>
          </View>)}
        </View>
      </ScrollView>
    )
};

export default PokemonList;