// Load Redux
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Initial shared state
const initialSharedState = {
    stickies: []
}

// Reducers
function state(state = initialSharedState, action = {}) {
    switch (action.type) {
        case 'STICKIES_UPDATE':
            return { ...state, stickies: action.body }
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
