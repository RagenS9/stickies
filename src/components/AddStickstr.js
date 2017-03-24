import React from 'react';
import Heading from './Heading';
import store from 'store';
import moment from 'moment';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

let now = moment().format('YYYY-MM-DD HH:mm:ss')

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
        this.addStickstr(this.state.noteTitle, this.state.noteBody, this.state.noteURL, this.state.noteTags, this.state.created_at, this.state.updated_at) 

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
            let stickstr = store.get('stickstrs')

            if ( ! stickstr) {
                stickstr = [];
            }

            let newStickstr = {
                noteTitle: noteTitle,
                noteBody: noteBody,
                noteURL: noteURL,
                noteTags: noteTags,
                created_at: now,
                updated_at: now
            };
            stickstr.push(newStickstr);

            store.set('stickstrs', stickstr);

            this.props.dispatch({type: "STICKSTRS", body: stickstr})
        }
    }

    render() {

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
                                <textarea type="text" className="form-control title"  value={this.state.noteTitle} onChange={(e) => this.setState({noteTitle: e.target.value})}></textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>Stickstr Note</h4>
                                <p>Type all of your notes and ideas.</p>
                                <textarea type="text" className="form-control body" rows="15" value={this.state.noteBody} onChange={(e) => this.setState({noteBody: e.target.value})}></textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>URL</h4>
                                <p>Provide a related URL with information or image.</p>
                                <textarea type="text" className="form-control url" value={this.state.noteURL} onChange={(e) => this.setState({noteURL: e.target.value})}></textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>Tags</h4>
                                <p>Write some subject tags separated by a space. For example, "media communications theory" would make three separate tags: media, communications, and theory. This will make it easier to find your Stickstrs later.</p>
                                <textarea type="text" className="form-control tags" value={this.state.noteTags} onChange={(e) => this.setState({noteTags: e.target.value})}></textarea>
                            </div>
                        </div>

                        <div className="panel-footer">
                            <button type="button" className="btn btn-success saveButton" onClick={this.onClick}>Save</button>
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