// Load Redux
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Initial shared state
const initialSharedState = {
    stickstrs: []
}

// Reducers
function state(state = initialSharedState, action = {}) {
    switch (action.type) {
        case 'STICKSTRS':
            return { ...state, stickstrs: action.body }
        default:
            return state
    }
}

// Combine reducers into a single store
const store = createStore(
  combineReducers({
    state: state,
    routing: routerReducer
  })
)

export default store
