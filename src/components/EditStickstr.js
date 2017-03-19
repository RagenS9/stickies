import React from 'react';
import Heading from './Heading';
import store from '../Reducers'

// QQRAGEN: add deleteStickstr method/function thingie here maybe? Have to put the this.onClick part into the  delete button. and the add button functiony stuff into that button, too. 
                //     <div className="col-xs-6 push-right">
                //         <span className="input-group-btn">
                //             <button className="btn btn-default" type="button" onClick={() => this.onClick(this.props.deleteStickstr)}>Delete</button>
                //         </span>  
                //     </div>
class EditStickstr extends React.Component {
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
                                <textarea type="text" id="title" className="form-control" required>{this.props.noteTitle}</textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>Flickstr Note</h4>
                                <textarea type="text" id="body" className="form-control" required>{this.props.noteBody}</textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>URL</h4>
                                <textarea type="text" className="form-control" id="url" required>{this.props.noteURL}</textarea>
                            </div>

                            <div className="form-group">
                            <br/>
                                <h4>Tags</h4>
                                <textarea type="text" className="form-control" id="tags" required>{this.props.noteTags}</textarea>
                            </div>
                        </div>

                        <div className="panel-footer">
                            <button type="button" className="btn btn-danger deleteButton" onClick={() => this.onClick(this.props.deleteStickstr)}>Delete Stickstr</button>
                            <button type="button" className="btn btn-primary saveButton pull-right" onClick={() => this.onClick(this.props.AddStickstr)}>Save Stickstr</button>
                        </div>
                    </div>
                </div>
            </div>
    }
}

export default EditStickstr;