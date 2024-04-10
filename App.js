import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <AppRouter></AppRouter>
      </NavigationContainer>
    </Provider>  
  );
}