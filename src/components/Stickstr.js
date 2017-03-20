import React from 'react';
import { browserHistory } from 'react-router'
import moment from 'moment';

class Stickstr extends React.Component {

    render() {

        let url = this.props.noteURL
        let isImage = (url.includes('.jpg') || url.includes('.png') || url.includes('.gif') || url.includes('unsplash'))
        return (
            <div className="stickstrCardContent">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="title">{this.props.noteTitle}</h3>
                    </div>
                    <div className="panel-body">
                        <p className="body">{this.props.noteBody}</p>
                        <div className="url" style={isImage ? {padding: '0px'} : {}}>
                            <figure className="image is-4by3" style={isImage ? {background:'url(' + url + ')', backgroundSize: 'cover', paddingTop: '72%'} : {}}>
                            {isImage || ! url ? <div className="note-link">&nbsp;</div> : <a href={url} target="_blank" className="note-link">Visit Link</a>}
                            </figure>
                        </div>
                        <p className="tags">{this.props.noteTags}</p>
                        <div className="updated_at">
                            <small>Updated {moment(this.props.updated_at).format('MM/DD/YYYY')}</small>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <button type="button" className="btn btn-primary editButton" onClick={() => browserHistory.push('/' + this.props.index + '/editstickstr')}>Edit Stickstr</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stickstr;

//i think this might have something to do with the noteTags, but it didn't do anything to make them active, so I'm not sure what it was supposed to do.
// <p className="text-truncate">{this.props.body.split('\n').shift()}</p>


