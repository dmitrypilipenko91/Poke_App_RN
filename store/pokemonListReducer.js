const ADD_LIST = 'add_list';

const defaultState = {
    results: []
}

export const pokemonListReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_LIST:
        return {...state, results: [...state.results, ...action.payload]}
      default:
        return state
    }
}

export const addPokeListAction = (payload) => ({type: ADD_LIST, payload});