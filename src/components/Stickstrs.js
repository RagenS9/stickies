import React from 'react';
import Heading from './Heading';
import AddStickstr from './AddStickstr';
import Stickstr from './Stickstr';
// import StickstrEdit from './StickstrEdit';
import { connect } from 'react-redux'
import store from '../Reducers'

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
        store.get('newStickstr')
        // Put the stickstr array in redux, must have a type: 'STICKSTRS' for our Reducer to do the correction action, and a body property with our stickstrs array in it
        .then(stickstrs => this.props.dispatch({type: 'STICKSTRS', body: stickstrs}))
    }

    render() {
        let stickstrs = this.props.sharedStickstrs.map((stickstr, key) => <Stickstr key={key} {...stickstr} />)

        if (stickstrs.length === 0) {
            stickstrs =  <div className="alert alert-success text-center">Please click the "Add Stickstr" button to add a new Stickstr note.</div>
            // <div>
            // <Heading />
            // <div className="row">
            //     <div className="col-xs-12">
            //         <h3>Welcome to Stickstr! We help you organize and save your notes and ideas.</h3>
            //     </div>
            //     <div className="alert alert-success text-center">Please click the "Add Stickstr" button to add a new Stickstr note.
            //     </div>
            // </div>
            // </div>
        }

        return (
            <div>
            <Heading />
            <AddStickstr addStickstr={this.addStickstr} />
            <h3>All Stickstrs</h3>
                <div className="row">
                    <div className="col-xs-4 StickstrsCard">
                        <ul className="list-group">
                            {stickstrs}
                        </ul>                    
                    </div>
                </div>
                </div>
        )
    }
}


//export the component 
// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedStickstrs: redux.state.stickstrs
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Stickstrs)
// export default Stickstrs;