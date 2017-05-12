// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// App Imports
import TweetList from './list';
import { fetchTweets } from '../../actions/tweet';

class TweetListContainer extends Component {
    componentDidMount() {
        this.props.fetchTweets();
    }

    render() {
        return (
            <section>
                <h2>💭 Tweets</h2>

                <br/>

                <TweetList tweets={ this.props.tweets } />
            </section>
        );
    }
}

TweetListContainer.propTypes = {
    tweets: React.PropTypes.array.isRequired,
    fetchTweets: React.PropTypes.func.isRequired
};

function tweetsState(state) {
    return {
        tweets: state.tweets
    }
}

export default connect(tweetsState, { fetchTweets })(TweetListContainer);