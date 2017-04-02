import React, { Component } from 'react';
import {FlatButton } from 'material-ui';
class Logout extends Component {
    
    render() {
        return (
            <FlatButton label="logout" 
            onTouchTap={this.props.onTouchTap}
            style={this.props.style}
            />
        );
    }
}

export default Logout;