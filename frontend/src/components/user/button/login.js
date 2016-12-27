// Imports
import React, { Component } from 'react';
import { Link } from 'react-router';

// UI Imports
import FlatButton from 'material-ui/FlatButton';

class UserButtonLogin extends Component {
    render() {
        return (
            <Link to="/user/login"><FlatButton {...this.props} label="Login" style={{ color: 'white' }}/></Link>
        );
    }
}

export default UserButtonLogin;