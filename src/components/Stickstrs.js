import React from 'react';
import Heading from './Heading';
import Stickstr from './Stickstr';
import Start from './Start';
// import AddStickstr from './AddStickstr';
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
        let stickstrs = this.props.sharedStickstrs.map((stickstr, key) => <Stickstr key={key} {...stickstr} />) // don't really understand this line, still. Or map. Or where key came from.

// return <div onLoad={() => browserHistory.push('/start')}></div> //something I tried at some point.

//here, I tried to tell it that if there weren't any stickstrs, to run the start page. But it would show me 
        if (stickstrs.length === 0) {
            return <div {...browserHistory.push('/start')}></div>
        }

//and then an else statement that if there *were* stickstrs, to build the cards. unfortunately, when I finally got something to go from the add page to this one, it didn't show up as being saved in the storage. One time, it did. I don't know why it worked once but not other times. But when the page was refreshed because I saved something in visual studio, it went back to the start page and didn't keep the note that I had managed to save. Though it's still in storage when you inspect it.
// ALSO, when it DOES go from the add page to this stickstrs page, there is a blank form for some reason. Don't know what that's about. AND the note that it took from the add page posted with its text all on top of the other, and not in the basic layout that I had created in the Stickstr file.
//I think it would be really helpful if you could maybe, in the future, when you're providing sample code, use more-descriptive names for things. I can't track what's being called what or how it's functioning or how it all relates to each other, because everything in the Todo project was just called the same thing over and over again. I really couldn't tell you what one thing was versus another, how that translates to this project or not, or how the things in Todos were working together, because I don't know what anything was. I tried renaming things to try to figure that out, but since it just breaks the whole thing when you change something, I wasn't able to sort that out. I tried replicating the same naming system that you used there by naming everything the same thing and used upper case when you used upper case and plural when you used plural, but I don't know what those things are or why they were put that way in the first place, so I couldn't really sort out what to fix here.
        // else {
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
// }


//export the component 
// I don't know what this is or why it was in the todos, but I put it here, too.

const mapStateToProps = (redux) => {
    return {
        sharedStickstrs: redux.state.stickstrs
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Stickstrs)
// export default Stickstrs;