import React from 'react';
import Layout from './Layout';
import store from 'store';
import moment from 'moment';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

let now = moment().format('YYY-MM-DD HH:mm:ss')

class AddStickstr extends React.Component {

        constructor(props) { 
        super(props)
        // this.onClick = this.onClick.bind(this)
        this.state = {
            noteTitle: '',
            noteBody: '',
            noteTags: '',
            noteURL: '',
            created_at: now,
            updated_at: now
        }
    }

    onClick(addStickstr) {
//call parent addStickstr method found on the Stickstrs.js file.
        addStickstr(this.state.description, this.state.category)

// sets state of fields, and triggers render() again
        this.setState({
            // these are properties of an object
            noteTitle: '',
            noteBody: '',
            noteTags: '',
            noteURL: '',
            created_at: now,
            updated_at: now
            
        })
    }

    render() {
        // 'newStickstr' is the key, and key is what we need to GET in stickstrs
        store.set('newStickstr', { noteTitle: this.state.noteTitle, noteBody: this.state.noteBody, noteTags: this.state.noteTags, noteURL: this.state.noteURL })

        return (
            <Layout>
                <div className="row">
                    <h3>New Stickstr</h3>
                    <div className="col-xs-3">
                        <div className="form-group">
                            <select className="form-control" value={this.state.noteTitle} onChange={(e) => this.setState({category: e.target.value})}>
                                <option value="">Select category...</option>
                                <option value="fun">Fun</option>
                                <option value="home">Home</option>
                                <option value="school">School</option>
                                <option value="work">Work</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-xs-9">
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" className="form-control" value={this.state.noteBody} onChange={(e) => this.setState({note: e.target.value})}/>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button" onClick={() => this.onClick(this.props.addStickstr)}>Add Stickstr</button>
                                </span>
                            </div>
                        </div>      
                    </div>
                </div>
            </Layout>
        )
    }
}

export default AddStickstr;