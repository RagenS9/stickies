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
        store.set('newStickstr', { noteTitle: this.state.noteTitle, noteBody: this.state.noteBody, noteURL: this.state.noteURL, noteTags: this.state.noteTags, created_at: this.state.created_at, updated_at: this.state.updated_at })

        
        return <div>
            <Heading />
                <div className="container stickstrCard">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3>New Stickstr</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <h4>Title</h4>
                                <span>Give your Stickstr a title.</span>
                                <textarea type="text" id="title" className="form-control"  value={this.state.noteTitle} onChange={(e) => this.setState({noteTitle: e.target.value})} onKeyPress={(e) => (e.key === 'Enter' ? this.onClick(this.props.addStickstr) : undefined)}  required></textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>Stickstr Note</h4>
                                <p>Type all of your notes and ideas.</p>
                                <textarea type="text" id="body" className="form-control" value={this.state.noteBody} onChange={(e) => this.setState({noteBody: e.target.value})} onKeyPress={(e) => (e.key === 'Enter' ? this.onClick(this.props.addStickstr) : undefined)} rows="15" required></textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>URL</h4>
                                <p>Provide a related URL with information or image.</p>
                                <textarea type="text" className="form-control" id="url" value={this.state.noteURL} onChange={(e) => this.setState({noteURL: e.target.value})} onKeyPress={(e) => (e.key === 'Enter' ? this.onClick(this.props.addStickstr) : undefined)} required></textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>Tags</h4>
                                <p>Write some subject tags separated by a space. For example, "media communications theory" would make three separate tags: media, communications, and theory. This will make it easier to find your Stickstrs later.</p>
                                <textarea type="text" className="form-control" id="tags" value={this.state.noteTags} onChange={(e) => this.setState({noteTags: e.target.value})} onKeyPress={(e) => (e.key === 'Enter' ? this.onClick(this.props.addStickstr) : undefined)} required></textarea>
                            </div>
                        </div>

                        <div className="panel-footer">
                            <button id="saveButton" type="button" className="btn btn-success" onClick={() => this.onClick(this.props.AddStickstr)}>Save</button>
                        </div>
                    </div>
                </div>
        </div>
    }
}

const mapStateToProps = (redux) => {
    return {
        sharedStickstrs: redux.state.stickstrs
    }
}
export default connect(mapStateToProps)(AddStickstr);
