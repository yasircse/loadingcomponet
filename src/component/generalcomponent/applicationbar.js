import React, { Component } from 'react';
import LoginBtn from './loginbtn';
import Logout from './logout'
import { AppBar, DropDownMenu, MenuItem, Paper, Drawer, Divider, } from 'material-ui';
import { browserHistory } from 'react-router';
import { orange500} from 'material-ui/styles/colors';


const styles = {
    btn: {
        marginTop: 10,

    },
    container: {
        display: 'flex'
    }

}
class ApplcationBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            drpDnLabelChange: '',
            value: 1,
            open: false
        }
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        this.updateUser();
    }

    updateUser() {

        this.setState({
            drpDnLabelChange: localStorage.userName || 'Account Profile'
        });
    }

    componentWillReceiveProps(nextProps) {
        this.updateUser();
    }

    handleMenuTouchTap() {
        localStorage.clear();
        browserHistory.push('/login');

    }

    handleLogout() {
        localStorage.clear();
        browserHistory.push('/login');
    }
handleToggle = () => this.setState({ open: !this.state.open });

navigate(path) {
    browserHistory.push(path);
    this.setState({ open: false });
}

    render() {
        let button = null
        const isLoggedIn = localStorage.userName;
        if (isLoggedIn) {
            button = <Logout
                onTouchTap={this.handleLogout}

            />
        } else {
            button = <LoginBtn

            />

        }
        return (
            <div>
                <AppBar
                    title='My Project'
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={
                        <div style={styles.container}>
                            <div>
                                <DropDownMenu
                                    value={this.state.value}

                                >
                                    <MenuItem value={1} primaryText={this.state.drpDnLabelChange} />
                                    <MenuItem value={2} primaryText=''

                                    />
                                </DropDownMenu>
                            </div>
                            <div style={styles.btn}>
                                {button}
                            </div>
                        </div>
                    }
                />
                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <Paper style={{ height: 150, width: 300, background: orange500 }}>
                        <h1 style={{ color: '#FFFFFF', paddingTop: 60, paddingLeft: 80 }}>UCMS</h1>
                    </Paper>
                    <MenuItem onTouchTap={() => this.navigate('/page1')}>Page1</MenuItem>
                    <MenuItem onTouchTap={() => this.navigate('/page2')}>Page2</MenuItem>
                    <Divider />
                    <MenuItem onTouchTap={() => this.navigate('/login')}>Login</MenuItem>
                    
                </Drawer>
            </div>
        );
    }
}

export default ApplcationBar;