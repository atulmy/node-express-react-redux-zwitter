// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// App Imports
import TweetList from './tweet-list';
import { fetchTweets } from '../actions/tweets';

class Tweets extends Component {
    componentDidMount() {
        this.props.fetchTweets();
    }

    render() {
        return (
            <div>
                <h2>Tweets</h2>

                <TweetList tweets={ this.props.tweets } />
            </div>
        );
    }
}

Tweets.propTypes = {
    tweets: React.PropTypes.array.isRequired,
    fetchTweets: React.PropTypes.func.isRequired
};

function tweetsState(state) {
    return {
        tweets: state.tweets
    }
}

export default connect(tweetsState, { fetchTweets })(Tweets);