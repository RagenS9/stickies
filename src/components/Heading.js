import React from 'react';
import { browserHistory } from 'react-router'

class Heading extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 heading">
                        <img className="logo" src={require('./images/logoTwist2.png')} alt="Stickstr logo showing orange sticky notes"/><span className="layoutTitle"><strong>Stickstr</strong></span>
                    </div>

                    <div className="col-xs-6 nav">
                        <div className="btn-group">
                        <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>All Stickstrs</button>
                        <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/addstickstr')}>Add Stickstr</button>
                        </div>
                    </div>

                </div>
            </div>  
        )
    }
}

export default Heading;