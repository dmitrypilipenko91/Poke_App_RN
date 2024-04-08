import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import PokemonList from './components/PokemonList';
import { store } from './store';
import { styles } from './styles';

export default function App() {
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>I love dogs!</Text>
        <Counter></Counter>
        <PokemonList></PokemonList>
      </View>
    </Provider>  
  );
}