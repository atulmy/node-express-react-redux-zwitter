// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

// UI Imports
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'
import { blue500, red500 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import { Card, CardText } from 'material-ui/Card'

// App Imports
import { postTweet } from '../../actions/tweet'
import AuthRedirect from './../user/auth-redirect'
import Loading from '../loading'

class TweetAdd extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: '',
      isLoading: false,
      error: '',
      notification: false,
      viewTweet: false,
      tweetId: ''
    }
  }

  onSubmit (event) {
    event.preventDefault()

    console.log('E - submit #form-tweet')

    this.setState({isLoading: true})

    let input = {}
    input.text = this.state.text

    if (input.text !== '') {
      this.props.postTweet(input).then((response) => {
        if (response.success) {
          this.setState({isLoading: false, notification: true, text: '', error: '', tweetId: response.data.tweetId})
        } else {
          this.setState({isLoading: false, error: response.errors[0].message})
        }
      })
    } else {
      this.setState({isLoading: false, error: 'Tweet cannot be empty.', notification: false})
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
        <h2><span role="img" aria-label="tweet">💭</span> Tweet to the world</h2>

        <br/>

        {this.state.error ? <Card><CardText color={red500}>{this.state.error}</CardText></Card> : ''}

        {this.state.message ? <Card><CardText color={blue500}>{this.state.message}</CardText></Card> : ''}

        <form id="form-tweet" onSubmit={this.onSubmit.bind(this)}>
          <TextField
            name="text"
            value={this.state.text}
            onChange={this.onChange.bind(this)}
            floatingLabelText="What's happening?"
            multiLine={true}
            rows={1}
            fullWidth={true}
          />

          <br/>
          <br/>

          {this.state.isLoading ? <Loading/> : <RaisedButton label="🐤 Submit" type="submit" backgroundColor={blue500} labelColor="white"/>}
        </form>

        <Snackbar
          open={this.state.notification}
          message="Tweet has been posted"
          autoHideDuration={4000}
          action="View Tweet"
          onActionClick={() => (this.setState({viewTweet: true}))}
        />

        {this.state.viewTweet ? <Redirect to={`/tweet/${ this.state.tweetId }`}/> : ''}

        <AuthRedirect/>
      </section>
    )
  }
}

TweetAdd.propTypes = {
  postTweet: PropTypes.func.isRequired
}

export default connect(null, {postTweet})(TweetAdd)
