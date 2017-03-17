import React from 'react';
import Layout from './Layout';
import Nav from './Nav';
import AddStickie from './AddStickie';
import Stickie from './Stickie';
import StickieEdit from './StickieEdit';
// import { connect } from 'react-redux'
// import { browserHistory } from 'react-router'

class Stickies extends React.Component {

    //API methods
    getStickies() {
        fetch('/api/v1/stickies')
        .then(response => response.json())
        // .then(todos => this.props.dispatch({type: 'STICKIES_UPDATE', body: stickies}))
    }

    render() {
        return (
            <Layout>
                <div>
                </div>
            </Layout>
        )
    }
}

export default Stickies;