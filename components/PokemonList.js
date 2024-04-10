import React, { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../asyncActions/fetchPokemonList";
import { styles } from "../styles";

const PokemonList = ( {navigation} ) => {
    const dispatch = useDispatch();
      
    const pokemonList = useSelector(state => state.pokeList.results);

    const addPokeList = () => {
        dispatch (fetchPokemonList()) 
    };

    useEffect(() => {
        addPokeList()
    }, []);
 
    return(
      <View>
        <ScrollView contentContainerStyle={styles.pokeList}>{pokemonList.map(poke => 
          <Pressable style={styles.pokeBlock}
                key={poke.name}
                onPress={() => navigation.navigate('Poke', {url: poke.url, pokeName: poke.name})}>
            <Text>{poke.name}</Text>
          </Pressable>)}
        </ScrollView>
      </View>
    )
};

export default PokemonList;