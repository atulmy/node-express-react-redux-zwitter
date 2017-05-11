// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// UI Imports
import { Card, CardTitle } from 'material-ui/Card';

function TweetView({ tweet }) {
    return (
        <div>
            <Card>
                <CardTitle title={ tweet.text } subtitle={ moment(tweet.createdAt).fromNow() } />
            </Card>

            <br/>

            <Link to="/">👈 Back to all tweets</Link>
        </div>
    );
}

export default TweetView;