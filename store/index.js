import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from "redux-thunk";
import { pokemonListReducer } from "./pokemonListReducer";


const rootReducer = combineReducers({
    pokeList: pokemonListReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));