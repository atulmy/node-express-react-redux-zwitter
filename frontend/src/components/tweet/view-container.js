// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// App Imports
import TweetView from './view';
import { fetchTweet } from '../../actions/tweet';

class TweetViewContainer extends Component {
    componentDidMount() {
        this.props.fetchTweet(this.props.match.params.tweetId);
    }

    render() {
        return (
            <section>
                <h2>Tweet</h2>

                <br/>

                <TweetView tweet={ this.props.tweet } />
            </section>
        );
    }
}

TweetViewContainer.propTypes = {
    tweet: React.PropTypes.object.isRequired,
    fetchTweet: React.PropTypes.func.isRequired
};

function tweetState(state) {
    return {
        tweet: state.tweet
    }
}

export default connect(tweetState, { fetchTweet })(TweetViewContainer);