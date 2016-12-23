// Imports
import React from 'react';
import moment from 'moment';

// UI Imports
import { Card, CardTitle } from 'material-ui/Card';

export default function TweetList({ tweets }) {
    const emptyMessage = (
        <p>No tweets to show.</p>
    );

    const tweetsList = (
        tweets.map(({ _id, text, createdAt }) => (
            <Card key={ _id }>
                <CardTitle title={ text } subtitle={ moment(createdAt).fromNow() } />
            </Card>
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