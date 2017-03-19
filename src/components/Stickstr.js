import React from 'react';
import store from 'store';
import { browserHistory } from 'react-router'

class Stickstr extends React.Component {


    render() {

        return (
                <div className="container stickstrCardContent">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3>{this.props.noteTitle}</h3>
                        </div>
                        <div className="panel-body">
                            <p id="body" className="form-control">{this.props.noteBody}</p>
                            <p type="text" className="form-control" id="url">{this.props.noteURL}</p>
                            <p type="text" className="form-control" id="tags">{this.props.noteTags}</p>
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