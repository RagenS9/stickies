import React from 'react';
// import store from 'store';
import { browserHistory } from 'react-router'

class Stickstr extends React.Component {

// Collin had stuff like this in his todo, but I don't think we need it? I don't really know what this is for or what it does, so it's hard to guess.
//  static propTypes = {
//         noteTitle: React.PropTypes.string.isRequired,
//         noteBody: React.PropTypes.string.isRequired,
//         noteURL: React.PropTypes.string.isRequired,
//         noteTags: React.PropTypes.string.isRequired,
//         // toggleComplete: React.PropTypes.func
//     }

    // Define default property values
    // i don't think we have any??
    // static defaultProps = {
    //     id: 0,
    //     completed: 'yes',
    //     todo: 'This is an example of default prop values',
    //     category: 'Uncategorized'
    // }

    render() {

        // I'm getting confused by all of the separate pages--specifically, why do we need the singular note file when the add and edit files seem to do the same thing? and where does the store.get need to go? Not sure what props does versus store stuff versus state versus just about anything else. Tried replicating the todo setup, but that obviously isn't working out so well in this project. :-/

        return (
                <div className="container stickstrCardContent">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="title">{this.props.noteTitle}</h3>
                        </div>
                        <div className="panel-body">
                            <p className="body">{this.props.noteBody}</p>
                            <p className="url">{this.props.noteURL}</p>
                            <p className="tags">{this.props.noteTags}</p>
                        </div>
                        <div className="panel-footer">
                            <button type="button" className="btn btn-primary editButton" onClick={() => browserHistory.push('/editstickstr')}>Edit Stickstr</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Stickstr;