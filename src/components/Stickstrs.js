import React from 'react';
import Heading from './Heading';
import Stickstr from './Stickstr';
import Start from './Start';
import store from 'store';
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
        let stickstrs = this.props.sharedStickstrs.map((stickstr, key) => <Stickstr key={key} index={key} {...stickstr} />) 

//this is to do searching
        // let stickstrs = this.props.redux.stickstrs
            // .filter((stickstr) => {
            //     return (
            //         this.props.redux.searchTerm === '' ||
            //         stickstr.stickstrTitle.includes(this.props.redux.searchTerm) ||
            //         stickstr.stickstrBody.includes(this.props.redux.searchTerm) ||
            //         stickstr.stickstrTags.includes(this.props.redux.searchTerm)
            //     )
            // })

//if there aren't any stickstrs, run the start page.
        if (stickstrs.length === 0) {
            return <Start />
        }

//and then an else statement that if there *are* stickstrs, to build the cards. 
        else {
            return (
            <div>
                <Heading />
                <div className="container">
                    <div className="row">
                        {stickstrs}
                    </div>
                </div>
            </div>
        )
        }  
    }
}

//export the component 
const mapStateToProps = (redux) => {
    return {
        sharedStickstrs: redux.state.stickstrs
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Stickstrs)
// export default Stickstrs;