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
import Stickies from './components/Stickies';
import Start from './components/Start';
import AddStickie from './components/AddStickie';
import StickieEdit from './components/StickieEdit';

//QQCollin, Ragen: not sure if we did the route paths right. 

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Stickies} />
                <Route path="/start" component={Start} />
                <Route path="/addstickie" component={AddStickie} />
                <Route path="/stickieedit" component={StickieEdit} />
            </Router>
        </Provider>
    }

    // render() {
    //     return <Provider store={store}>
    //         <Router history={history}>
    //             <Route path="/" component={Todos} />
    //         </Router>
    //     </Provider>
    // }
}

export default Routes
