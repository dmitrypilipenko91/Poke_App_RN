import { createStore, combineReducers, applyMiddleware } from "redux";
import { demoReducer } from "./demoReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from "redux-thunk";
import { pokemonListReducer } from "./pokemonListReducer";


const rootReducer = combineReducers({
    demo: demoReducer,
    pokeList: pokemonListReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));