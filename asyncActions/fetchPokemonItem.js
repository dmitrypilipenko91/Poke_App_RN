import { addPokeItemAction } from "../store/pokemonItemReducer"

export const fetchPokemonItem = (url) => {
    return function(dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(json => dispatch(addPokeItemAction(json)))
    }
}