// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

// UI Imports
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { blue500, red500 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import { Card, CardText } from 'material-ui/Card'

// App Imports
import { postRegister } from '../../actions/user'

class UserRegister extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      error: '',
      isLoading: false,
      isLoggingIn: false,
      notification: false,
      registered: false
    }
  }

  onSubmit (event) {
    event.preventDefault()

    console.log('E - submit #form-tweet')

    let input = {}
    input.username = this.state.username
    input.password = this.state.password

    if (input.username !== '' && input.password !== '') {
      this.setState({isLoggingIn: true, isLoading: true})

      this.props.postRegister(input).then((response) => {
        if (response.success) {
          this.setState({
            isLoading: false,
            isLoggingIn: false,
            notification: true,
            username: '',
            password: '',
            error: ''
          })

          // Redirect
          setTimeout(() => {
            this.setState({registered: true})
          }, 1000)
        } else {
          this.setState({
            isLoading: false,
            isLoggingIn: false,
            error: response.errors[0].message,
            notification: false
          })
        }
      })
    } else {
      this.setState({
        error: 'Please enter your username and password.',
        notification: false
      })
    }
  }

  onChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <section>
        <h2>Register</h2>

        <br/>

        {this.state.error ? <Card><CardText color={red500}>{this.state.error}</CardText></Card> : ''}

        {this.state.message ? <Card><CardText color={blue500}>{this.state.message}</CardText></Card> : ''}

        <form id="form-tweet" onSubmit={this.onSubmit.bind(this)}>
          <TextField
            name="username"
            value={this.state.username}
            onChange={this.onChange.bind(this)}
            floatingLabelText="Username"
            fullWidth={true}
          />

          <TextField
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange.bind(this)}
            floatingLabelText="Password"
            fullWidth={true}
          />

          <br/>
          <br/>

          <RaisedButton label="Submit" type="submit" backgroundColor={blue500} labelColor="white"/>

          <Link to="/user/login"><FlatButton label="Login"/></Link>
        </form>

        <Snackbar
          open={this.state.isLoggingIn}
          message="Logging in..."
          autoHideDuration={1000}
        />

        <Snackbar
          open={this.state.notification}
          message="Registered successfully."
          autoHideDuration={4000}
        />

        {this.state.registered ? <Redirect to="/user/login"/> : ''}
      </section>
    )
  }
}

UserRegister.propTypes = {
  postRegister: PropTypes.func.isRequired
}

export default connect(null, {postRegister})(UserRegister)
