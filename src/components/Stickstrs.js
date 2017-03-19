import React from 'react';
import Heading from './Heading';
import Stickstr from './Stickstr';
import AddStickstr from './AddStickstr';
import store from 'store';
// import EditStickstr from './EditStickstr';
// import store from '../Reducers'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';

class Stickstrs extends React.Component {

//setup
    constructor(props) {
        //call the react.component constructor() method
        //pass the props onto the contstructor
        super(props)

//Bind custom methods to this object context
        this.getStickstrs = this.getStickstrs.bind(this)
    }

//react lifecycle methods
    componentWillMount() {
        this.getStickstrs()
    }

//storage methods
    getStickstrs() {
        let stickstrs = store.get('stickstrs')
        // Put the stickstr array in redux, must have a type: 'STICKSTRS' for our Reducer to do the correction action, and a body property with our stickstrs array in it
        this.props.dispatch({type: 'STICKSTRS', body: stickstrs})
    }

    render() {

        // QQRAGEN: add editButton method/function thingie here maybe?

        let stickstrs = this.props.sharedStickstrs.map((stickstr, key) => <Stickstr key={key} {...stickstr} />)

        if (stickstrs.length === 0) {
            stickstrs =  <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-2 alert alert-success text-center">
                        <h2>Welcome to Stickstr!</h2>
                        <h3>We help you organize and save your notes and ideas. <br/>Please click the "Add Stickstr" button to add a new Stickstr.</h3>
                    </div>
                </div>
            </div>
            </div>
        }

        return (
            <div>
                <Heading />
                <Stickstr stickstr={this.stickstr} />
                    <div className="container card">
                        <div className="row">
                            <div className="col-xs-3 col-md-4">
                             {stickstrs}
                            </div>
                        </div>
                        
                    </div>
            </div>
        )
    }
}


//export the component 
// Map shared Redux state to props
// const mapStateToProps = (redux) => {
//     return {
//         sharedStickstrs: redux.state.stickstrs
//     }
// }

const mapStateToProps = (redux) => {
    return {
        sharedStickstrs: redux.state.stickstrs
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Stickstrs)
// export default Stickstrs;