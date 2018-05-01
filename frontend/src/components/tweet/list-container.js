// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import { fetchTweets } from '../../actions/tweet'
import Loading from '../loading'
import TweetList from './list'

class TweetListContainer extends Component {
  componentDidMount () {
    this.props.fetchTweets()
  }

  render () {
    return (
      <section>
        <h2><span role="img" aria-label="tweets">💭</span> Tweets</h2>

        <br/>

        {this.props.tweets.loading ? <Loading/> : <TweetList tweets={this.props.tweets.list}/>}
      </section>
    )
  }
}

TweetListContainer.propTypes = {
  tweets: PropTypes.object.isRequired,
  fetchTweets: PropTypes.func.isRequired
}

function tweetsState (state) {
  return {
    tweets: state.tweets
  }
}

export default connect(tweetsState, {fetchTweets})(TweetListContainer)
