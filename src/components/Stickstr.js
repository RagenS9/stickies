import React from 'react';
// import Layout from './Layout';
import store from '../Reducers'

class Stickstr extends React.Component {


    render() {
    // <div className="checkbox"><label className={this.props.completed === 'yes' ? 'done' : ''}><input type="checkbox" checked={this.props.completed === 'yes' ? true : false} onChange={(e) => this.props.toggleComplete(this.props.id, e.target.checked)} />{this.props.stickstr}</label></div>
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-xs-8">
                        <div className="checkbox"><label className={this.props.completed === 'yes' ? 'done' : ''}><input type="checkbox" checked={this.props.completed === 'yes' ? true : false} />{this.props.stickstr}</label></div>
                    </div>
                    <div className="col-xs-4">
                        <div className="checkbox text-right">
                            <div className="label label-default">{this.props.category}</div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default Stickstr;