export const SET_TWEETS = 'SET_TWEETS';

export function fetchTweets() {
    return dispatch => {
        return fetch('/tweets')
            .then(response => response.json())

            .then(response => dispatch({
                type: SET_TWEETS,
                tweets: response.data
            }));
    }
}

export function postTweet(tweet) {
    console.log(tweet);
    return dispatch => {
        return fetch('/tweet', {
            method: 'post',

            body: JSON.stringify(tweet),

            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    }
}