const defaultState = {
    value: 5
}
  
export const demoReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'add_value':
        return {...state, value: state.value + action.payload}
      case 'decrement_value':
        return {...state, value: state.value - action.payload}
      default:
        return state
    }
}