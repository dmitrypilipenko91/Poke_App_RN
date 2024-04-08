const defaultState = {
    results: []
}

export const pokemonListReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'add_list':
        return {...state, results: [...state.results, ...action.payload]}
      default:
        return state
    }
}