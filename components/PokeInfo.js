import React, { useEffect } from "react";
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonInfo } from "../asyncActions/fetchPokemonInfo";

const PokeInfo = ( {pokeName, url} ) => {
    
    const dispatch = useDispatch();

    const addPokeInfo = () => {
        dispatch (fetchPokemonInfo(`${url}`)) 
    };

    useEffect(() => {
        addPokeInfo()
    }, []);

    const pokeInfo = useSelector(state => state.pokeInfo.results);

    const pokeWeight = (Number(pokeInfo.weight)) / 10;

    const pokeHeight = (Number(pokeInfo.height)) * 10;
    
    return(
      <View>
        <Text>{pokeName}</Text>
        <Text>weight - {pokeWeight} kg</Text> 
        <Text>height - {pokeHeight} cm</Text>
      </View>
    )
};

export default PokeInfo;