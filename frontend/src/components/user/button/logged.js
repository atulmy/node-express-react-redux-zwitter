// Imports
import React from 'react';
import { Link } from 'react-router';

// UI Imports
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const UserButtonLogged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon color="white"/></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <Link to="/"><MenuItem primaryText="Refresh" /></Link>
        <Link to="/"><MenuItem primaryText="Sign out" /></Link>
    </IconMenu>
);

export default UserButtonLogged;