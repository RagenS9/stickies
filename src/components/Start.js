import React from 'react';
import Heading from './Heading';

class Start extends React.Component {
    render() {
        return (
            <div>
            <Heading />
            <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-2 text-center">
                        <h2>Welcome to Stickstr!</h2>
                        <h3>We help you organize and save your notes and ideas. <br/>Please click the "Add Stickstr" button <br/>to add a new Stickstr.</h3>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Start;