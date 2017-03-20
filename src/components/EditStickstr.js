import React from 'react';
import Heading from './Heading';
// import store from '../Reducers'
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
        // this.onClick = this.onClick.bind(this)
        this.state = {
            // I thought we would need to use store.get to pull the information created when the stickstr was created so that it can be manipulated or deleted within this edit page.
            // noteTitle: store.get('noteTitle'),
            // noteBody: store.get('noteBody'),
            // noteURL: store.get('noteURL'),
            // noteTags: store.get('noteTags'),
            // created_at: store.get('created_at'),
            // updated_at: now
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
            // this.props.dispatch({type: 'STICKSTRS', body: stickstrs})
            // store.clearAll()
            browserHistory.push('/')
        }

    render() {
        // Jeff thought this next part needed to be added. But it seemed to make things mad, so I noted it out.
        // 'newStickstr' is the key, and key is what we need to GET in stickstrs
        // store.set('newStickstr', { noteTitle: this.state.noteTitle, noteBody: this.state.noteBody, noteURL: this.state.noteURL, noteTags: this.state.noteTags, updated_at: this.state.updated_at })
        
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

// attempted to rewrite to use store.get. it broke the world
            // <Heading />
            //     <div className="container stickstrCardContent">
            //         <div className="panel panel-default">
            //             <div className="panel-heading">
            //                 <h3>Edit Stickstr</h3>
            //             </div>
            //             <div className="panel-body">
            //                 <div className="form-group">
            //                     <h4>Title</h4>
            //                     <textarea type="text" className="form-control title" value={store.get(noteTitle)} onChange={(e) => this.setState({noteTitle: e.target.value})}>{noteTitle}</textarea>
            //                 </div>

            //                 <div className="form-group">
            //                 <br/>
            //                     <h4>Flickstr Note</h4>
            //                     <textarea type="text" className="form-control body" value={store.get(noteBody)} onChange={(e) => this.setState({noteBody: e.target.value})}>{noteBody}</textarea>
            //                 </div>

            //                 <div className="form-group">
            //                 <br/>
            //                     <h4>URL</h4>
            //                     <textarea type="text" className="form-control url" value={store.get(noteURL)} onChange={(e) => this.setState({noteURL: e.target.value})}>{noteURL}</textarea>
            //                 </div>

            //                 <div className="form-group">
            //                 <br/>
            //                     <h4>Tags</h4>
            //                     <textarea type="text" className="form-control tags" value={store.get(noteTags)} onChange={(e) => this.setState({noteTags: e.target.value})}>{noteTags}</textarea>
            //                 </div>
            //             </div>


//original methods i invented to edit and delete the stickstr
            //     editStickstr(noteTitle, noteBody, noteURL, noteTags) {
//         if (noteTitle !== '' && noteBody !== '' && noteURL !== '' && noteTags !== '' ) {
//             let stickstr = store.set('stickstr')

// //I don't think I need this, because there wouldn't not be a stickstr if we're on the edit page.
//             // if ( ! stickstr) {
//             //     stickstr = [];
//             // }

// //I wasn't sure what to put here. I know that we want to replace the content with whatever is put in the form during the edit. So I left it exactly as I have it in the addStickstr file since I think it needs to do the same thing.
//             let newStickstr = {
//                 noteTitle: '',
//                 noteBody: '',
//                 noteURL: '',
//                 noteTags: '',
//                 updated_at: now
//             };
//             stickstr.push(newStickstr);

//             store.set('stickstr', stickstr);

//             this.props.dispatch({type: "STICKSTRS", body: stickstr})
//         }
//     }