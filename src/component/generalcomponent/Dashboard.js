import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props, context){
        super(props, context);
        this.state={
            user:localStorage.userName
        }
    }
    render() {
        return (
            <div>
                <h1>Welcome: {this.state.user}</h1>
            </div>
        );
    }
}

export default Dashboard;