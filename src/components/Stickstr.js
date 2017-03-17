import React from 'react';
import store from '../Reducers'

class Stickstr extends React.Component {


    render() {

// QQRAGEN: add editStickstr and deleteStickstr method/function thingies here maybe? then move these columns into the return below.
                //         <div className="row">
                //     <div className="col-xs-6">
                //         <span className="input-group-btn">
                //             <button className="btn btn-default" type="button" onClick={() => this.onClick(this.props.editStickstr)}>Edit</button>
                //         </span>                        
                //     </div>
                //     <div className="col-xs-6 push-right">
                //         <span className="input-group-btn">
                //             <button className="btn btn-default" type="button" onClick={() => this.onClick(this.props.deleteStickstr)}>Delete</button>
                //         </span>  
                //     </div>
                // </div>
        return <div>

            <div className="stickstrBuild">
                <h2>{this.props.noteTitle}</h2>
                <p>{this.props.noteBody}</p>
                <p>{this.props.noteURL}</p>
                <ul><li>{this.props.noteTags}</li></ul>
            </div>
        </div>
    }
}

export default Stickstr;