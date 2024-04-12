import React, { useEffect } from "react";
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonImage } from "../asyncActions/fetchPokemonImage";
import { styles } from "../styles";

const PokeImage = ( {url} ) => {
    
    const dispatch = useDispatch();

    const addPokeImage = () => {
        dispatch (fetchPokemonImage(`${url}`)) 
    };

    useEffect(() => {
        addPokeImage()
    }, []);

    const pokemonImage = useSelector(state => state.pokeImage.results);
    
    return(
      <View>
        <Image style={styles.pokeImage} source={{uri: `${pokemonImage.front_default}`}}></Image>
      </View>
    )
};

export default PokeImage;