import React from 'react';
import Heading from './Heading';
import store from 'store';
import moment from 'moment';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

let now = moment().format('YYY-MM-DD HH:mm:ss')

class AddStickstr extends React.Component {

        constructor(props) { 
        super(props)
        this.addStickstr = this.addStickstr.bind(this) 
        this.onClick = this.onClick.bind(this)
        this.state = {
            noteTitle: '',
            noteBody: '',
            noteURL: '',
            noteTags: '',
            created_at: now,
            updated_at: now
        }
    }
    onClick(addStickstr) {
//call parent addStickstr method found on the Stickstrs.js file.
        this.addStickstr(this.state.noteTitle, this.state.noteBody, this.state.noteURL, this.state.noteTags, this.state.created_at, this.state.updated_at) //she did not include created at or updated at here.

// sets state of fields, and triggers render() again
        this.setState({
            // these are properties of an object
            noteTitle: '',
            noteBody: '',
            noteURL: '',
            noteTags: '',
            created_at: now,
            updated_at: now
        })

        browserHistory.push('/')
    }

            addStickstr(noteTitle, noteBody, noteURL, noteTags) {
        if (noteTitle !== '' && noteBody !== '' && noteURL !== '' && noteTags !== '' ) {
            let stickstr = store.set('stickstr')

            if ( ! stickstr) {
                stickstr = [];
            }

            let newStickstr = {
                noteTitle: '',
                noteBody: '',
                noteURL: '',
                noteTags: '',
                created_at: now,//she did not include created at or updated at here.
                updated_at: now//she did not include created at or updated at here.
            };
            stickstr.push(newStickstr);

            store.set('stickstr', stickstr);

            this.props.dispatch({type: "STICKSTRS", body: stickstr})
        }
    }

    render() {
        // 'newStickstr' is the key, and key is what we need to GET in stickstrs
        store.set('newStickstr', { noteTitle: this.state.noteTitle, noteBody: this.state.noteBody, noteURL: this.state.noteURL, noteTags: this.state.noteTags })

        return (<div>
            <Heading />
                    <h3>New Stickstr</h3>
                        <div className="form-group">
                            <div className="input-group">
                            <h4>Title</h4>
                            <input type="text" className="form-control" value={this.state.noteTitle} onChange={(e) => this.setState({note: e.target.value})}/>
                            <h4>Note</h4>
                            <input type="text" className="form-control" value={this.state.noteBody} onChange={(e) => this.setState({note: e.target.value})}/>
                            <h4>URL</h4>
                            <input type="text" className="form-control" value={this.state.noteURL} onChange={(e) => this.setState({note: e.target.value})}/>
                            <h4>Tags</h4>
                            <input type="text" className="form-control" value={this.state.noteTags} onChange={(e) => this.setState({note: e.target.value})}/>
                            <br />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={() => this.onClick(this.props.addStickstr)}>Add Stickstr</button>
                            </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

const mapStateToProps = (redux) => {
    return {
        sharedStickstrs: redux.state.stickstrs
    }
}
export default connect(mapStateToProps)(AddStickstr);