import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { NativeRouter, Routes, Route, Navigate } from 'react-router-native';
import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';
import StartPage from './pages/StartPage';
import { store } from './store';
import { styles } from './styles';

export default function App() {
  
  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route path='/startpage' element={<StartPage/>}/>
          <Route path='/*' element={<Navigate to='/startpage' replace/>}/>
        </Routes>
      </NativeRouter>
    </Provider>  
  );
}