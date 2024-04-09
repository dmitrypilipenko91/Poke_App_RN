import React from "react";
import { Text, View } from 'react-native';
import { styles } from "../styles";

const Navbar = () => {
    return(
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Pokemons!</Text>
      </View>
    )
};

export default Navbar;