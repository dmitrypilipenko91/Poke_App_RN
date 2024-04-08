export const fetchPokemonList = () => {
    return function(dispatch) {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(json => dispatch({type: 'add_list', payload: json.results}))
    }
}