// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import { fetchTweet } from '../../actions/tweet'
import Loading from '../loading'
import TweetView from './view'

class TweetViewContainer extends Component {
  componentDidMount () {
    this.props.fetchTweet(this.props.match.params.tweetId)
  }

  render () {
    return (
      <section>
        <h2><span role="img" aria-label="tweet">💭</span> Tweet</h2>

        <br/>

        {this.props.tweet.loading ? <Loading/> : <TweetView tweet={this.props.tweet.details}/>}
      </section>
    )
  }
}

TweetViewContainer.propTypes = {
  tweet: PropTypes.object.isRequired,
  fetchTweet: PropTypes.func.isRequired
}

function tweetState (state) {
  return {
    tweet: state.tweet
  }
}

export default connect(tweetState, {fetchTweet})(TweetViewContainer)
