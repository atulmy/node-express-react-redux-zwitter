// Imports
import React from 'react';
import moment from 'moment';

export default function TweetList({ tweets }) {
    const emptyMessage = (
        <p>No tweets to show.</p>
    );

    const tweetsList = (
        tweets.map(({ _id, text, createdAt }) => (
            <div className="panel panel-default" key={ _id }>
                <div className="panel-body">
                    { text }
                </div>

                <div className="panel-footer">
                    { moment(createdAt).fromNow() }
                </div>
            </div>
        ))
    );

    return (
        <div>
            { tweets.length === 0 ? emptyMessage : tweetsList }
        </div>
    );
}

TweetList.propTypes = {
    tweets: React.PropTypes.array.isRequired
};