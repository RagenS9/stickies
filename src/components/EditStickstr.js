import React from 'react';
import Heading from './Heading';
import store from 'store';
import moment from 'moment';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

let now = moment().format('YYY-MM-DD HH:mm:ss')

class EditStickstr extends React.Component {
    constructor(props) { 
        super(props)
        this.saveStickstr = this.saveStickstr.bind(this)
        this.deleteStickstr = this.deleteStickstr.bind(this)
        this.state = {
            noteTitle: '',
            noteBody: '',
            noteURL: '',
            noteTags: '',
            created_at: now,
            updated_at: now
        }
    }

    componentWillMount() {
        if (this.props.params.index >= 0) {
            let stickstr = this.props.redux.stickstrs[this.props.params.index]
            stickstr.updated_at = now
            this.setState(stickstr)
        }
    }

        saveStickstr() {
            let stickstrs = store.get('stickstrs');
            stickstrs[this.props.params.index] = this.state;
            store.set('stickstrs', stickstrs);
            browserHistory.push('/')
        }

        deleteStickstr() {
            let stickstrs = store.get('stickstrs');
            stickstrs.splice(this.props.params.index, 1);
            store.set('stickstrs', stickstrs);
            browserHistory.push('/')
        }

    render() {
        
        return <div>
            <Heading />
                <div className="container stickstrCardContent">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3>Edit Stickstr</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <h4>Title</h4>
                                <textarea type="text" className="form-control title" value={this.state.noteTitle} onChange={(e) => this.setState({noteTitle: e.target.value})}></textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>Flickstr Note</h4>
                                <textarea type="text" className="form-control body" rows="15" value={this.state.noteBody} onChange={(e) => this.setState({noteBody: e.target.value})}></textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>URL</h4>
                                <textarea type="text" className="form-control url" value={this.state.noteURL} onChange={(e) => this.setState({noteURL: e.target.value})}></textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>Tags</h4>
                                <textarea type="text" className="form-control tags" value={this.state.noteTags} onChange={(e) => this.setState({noteTags: e.target.value})}></textarea>
                            </div>
                        </div>

                        <div className="panel-footer">
                            <button type="button" className="btn btn-danger deleteButton" onClick={this.deleteStickstr}>Delete</button>
                            <button type="button" className="btn btn-primary saveButton pull-right" onClick={this.saveStickstr}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
    }
}

const mapStateToProps = (redux) => {
    return {
        redux: redux.state
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(EditStickstr)