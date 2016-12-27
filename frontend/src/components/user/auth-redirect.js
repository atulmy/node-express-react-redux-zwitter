// Imports
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

class AuthRedirect extends Component {
    render() {
        const { isAuthenticated } = this.props.user;

        return (
            <div>
                { !isAuthenticated ? <Redirect to="/" /> : '' }
            </div>
        );
    }
}

AuthRedirect.propTypes = {
    user: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(AuthRedirect);
