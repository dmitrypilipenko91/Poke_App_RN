const ADD_IMG_URL = 'add_img_url';

const defaultState = {
    results: {}
}

export const pokemonImageReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_IMG_URL:
        return {...state, results: action.payload}
      default:
        return state
    }
}

export const addPokeImageAction = (payload) => ({type: ADD_IMG_URL, payload});