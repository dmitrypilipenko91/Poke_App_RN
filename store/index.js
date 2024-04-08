import { createStore, combineReducers } from "redux";
import { demoReducer } from "./demoReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    demo: demoReducer
});

export const store = createStore(rootReducer, composeWithDevTools());