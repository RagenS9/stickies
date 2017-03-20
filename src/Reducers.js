// Load Redux
import { compose, createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { default as storeJS } from 'store'

// Initial shared state
const initialSharedState = {
    stickstrs: [],
    searchTerm: ''
}

let stickstrs = storeJS.get('stickstrs') || []
// Reducers
function state(state = initialSharedState, action = {}) {
    switch (action.type) {
        case 'STICKSTRS':
            return { ...state, stickstrs: action.body }
        // case 'NOTE_UPDATE':
        //     stickstrs[action.index] = action.body
        //     storeJS.set('stickstrs', stickstrs)
        //     return { ...state, stickstrs: stickstrs }
        // case 'NOTE_DELETE':
        //     stickstrs = stickstrs.splice(action.index, 1)
        //     storeJS.set('stickstrs', stickstrs)
        //     return { ...state, stickstrs: stickstrs }
        // case 'NOTE_SEARCH':
        //     return { ...state, searchTerm: action.body }

        default:
            return state
    }
}

// Combine reducers into a single store
const composeEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    state: state,
    routing: routerReducer
  })
)

export default store
