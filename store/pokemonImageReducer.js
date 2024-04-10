const ADD_DATA = 'add_data';

const defaultState = {
    results: {}
}

export const pokemonImageReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_DATA:
        return {...state, results: action.payload}
      default:
        return state
    }
}

export const addPokeImageAction = (payload) => ({type: ADD_DATA, payload});