import React, { Component } from 'react';
import { TextField, Paper, RaisedButton, FlatButton } from 'material-ui';
import { orange500, blue500 } from 'material-ui/styles/colors';
import {browserHistory} from 'react-router';

const styles = {
    errorStyle: {
        color: orange500
    },
    underlineStyle: {
        borderColor: orange500
    },
    floatingLabelStyle: {
        color: orange500
    },
    floatingLabelFocusStyle: {
        color: blue500
    }

};
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleTouchTap() {
        
        localStorage.userName=this.state.username;
        localStorage.password=this.state.password;
        browserHistory.push('/dashboard');
        console.log(localStorage);
    };

    render() {
        return (
            <div>
                <Paper
                    style={{ height: 280, width: 400, marginTop: 100, marginLeft: 500, textAlign: 'center' }} zDepth={2}>
                    <h2>Login</h2>
                    <TextField
                        floatingLabelText="Username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleOnChange}
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />

                    <TextField
                        floatingLabelText="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />
                    <RaisedButton
                        label="Login"
                        primary={true}
                        onTouchTap={this.handleTouchTap}
                        style={{ marginTop: 25, width: 200 }}

                    />
                </Paper>
            </div>
        );
    }
}

export default Login;