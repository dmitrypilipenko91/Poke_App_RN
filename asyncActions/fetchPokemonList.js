import { addPokeListAction } from "../store/pokemonListReducer"

export const fetchPokemonList = () => {
    return function(dispatch) {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(json => dispatch(addPokeListAction(json.results)))
    }
}