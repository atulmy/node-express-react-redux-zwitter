// Imports
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AuthRedirect extends Component {
  render () {
    const {isAuthenticated} = this.props.user

    return (
      <div>
        {!isAuthenticated ? <Redirect to="/"/> : ''}
      </div>
    )
  }
}

AuthRedirect.propTypes = {
  user: PropTypes.object.isRequired,
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(AuthRedirect)
