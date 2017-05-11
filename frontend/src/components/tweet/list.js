// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// UI Imports
import { Card, CardTitle } from 'material-ui/Card';

function TweetList({ tweets }) {
    const emptyMessage = (
        <p>No tweets to show.</p>
    );

    const tweetsList = (
        tweets.map(({ _id, text, createdAt }) => (
            <Card key={ _id }>
                <Link to={ `/tweet/${ _id }` }><CardTitle title={ text } subtitle={ moment(createdAt).fromNow() } /></Link>
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

export default TweetList;