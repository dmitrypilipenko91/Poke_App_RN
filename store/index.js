import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from "redux-thunk";
import { pokemonImageReducer } from "./pokemonImageReducer";
import { pokemonItemReducer } from "./pokemonItemReducer";
import { pokemonListReducer } from "./pokemonListReducer";


const rootReducer = combineReducers({
    pokeList: pokemonListReducer,
    pokeItem: pokemonItemReducer,
    pokeImage: pokemonImageReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));