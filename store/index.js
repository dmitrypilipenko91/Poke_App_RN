import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from "redux-thunk";
import { pokemonImageReducer } from "./pokemonImageReducer";
import { pokemonInfoReducer } from "./pokemonInfoReducer";
import { pokemonListReducer } from "./pokemonListReducer";


const rootReducer = combineReducers({
    pokeList: pokemonListReducer,
    pokeInfo: pokemonInfoReducer,
    pokeImage: pokemonImageReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));