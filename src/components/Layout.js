import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="nav">
                        <img className="logo" src={require('./images/logoTwist2.png')} alt="Twisties logo showing orange sticky notes"/><span className="layoutTitle"><strong>Stickstr</strong></span>
                </div>
            </div>  
        )
    }
}

export default Layout;