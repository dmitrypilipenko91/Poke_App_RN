import { addPokeInfoAction } from "../store/pokemonInfoReducer"

export const fetchPokemonInfo = (url) => {
    return function(dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(json => dispatch(addPokeInfoAction(json)))
    }
}