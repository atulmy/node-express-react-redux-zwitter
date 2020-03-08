// Imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// UI Imports
import FlatButton from 'material-ui/FlatButton'

// App Imports
import { userLogout } from '../../../actions/user'

class UserButtonLogged extends Component {
  constructor () {
    super()

    this.state = {
      notification: false,
      loggedOut: false
    }
  }

  logout (event) {
    event.preventDefault()

    this.props.userLogout()
  }

  render () {
    return (
      <>
        <Link to="/tweet/add"><FlatButton label="Tweet"/></Link>
        <FlatButton label="Sign out" onClick={this.logout.bind(this)} />
      </>
    )
  }
}

UserButtonLogged.propTypes = {
  userLogout: PropTypes.func.isRequired,
}

export default connect(null, {userLogout})(UserButtonLogged)
