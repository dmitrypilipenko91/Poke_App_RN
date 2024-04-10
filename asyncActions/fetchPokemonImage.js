import { addPokeImageAction } from "../store/pokemonImageReducer"

export const fetchPokemonImage = (url) => {
    return function(dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(json => dispatch(addPokeImageAction(json.sprites)))
    }
}