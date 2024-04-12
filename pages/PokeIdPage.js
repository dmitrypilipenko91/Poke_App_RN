import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import PokeImage from '../components/PokeImage';
import PokeInfo from '../components/PokeInfo';
import { store } from '../store';
import { styles } from '../styles';


export default function PokeIdPage({ route }) {
  
  const { url, pokeName } = route.params;

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navbar></Navbar>
        <PokeInfo pokeName={pokeName} url={url}></PokeInfo>
        <PokeImage url={url}></PokeImage>
      </View>
    </Provider>  
  );
}