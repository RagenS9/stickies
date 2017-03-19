// Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
import Stickstrs from './components/Stickstrs';
import Start from './components/Start';
import AddStickstr from './components/AddStickstr';
import EditStickstr from './components/EditStickstr';



// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Stickstrs} />
                <Route path="/start" component={Start} />
                <Route path="/addstickstr" component={AddStickstr} />
                <Route path="/editstickstr" component={EditStickstr} />
            </Router>
        </Provider>
    }
}

export default Routes
