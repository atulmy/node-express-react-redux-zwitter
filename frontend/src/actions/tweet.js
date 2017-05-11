export const SET_TWEETS = 'SET_TWEETS';
export const SET_TWEET = 'SET_TWEET';

export function fetchTweets() {
    return dispatch => {
        return fetch('/tweets').then(function(response) {
            if (response.ok) {
                response.json().then(function(response) {
                    if(response.data.length > 0) {
                        dispatch({
                            type: SET_TWEETS,
                            tweets: response.data
                        });
                    }
                });
            } else {
                console.log("Looks like the response wasn't perfect, got status", response.status);
            }
        }, function(e) {
            console.log("Fetch failed!", e);
        });
    }
}

export function fetchTweet(tweetId) {
    console.log('fetchTweet');
    console.log(tweetId);

    return dispatch => {
        return fetch(`/tweet/${ tweetId }`).then(function(response) {
            if (response.ok) {
                response.json().then(function(response) {
                    if(response.success) {
                        dispatch({
                            type: SET_TWEET,
                            tweet: response.data
                        });
                    }
                });
            } else {
                console.log("Looks like the response wasn't perfect, got status", response.status);
            }
        }, function(e) {
            console.log("Fetch failed!", e);
        });
    }
}

export function postTweet(tweet) {
    console.log(tweet);

    const token = localStorage.getItem('token');

    return dispatch => {
        return fetch('/tweet/add', {
            method: 'post',

            body: JSON.stringify(tweet),

            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
            .then(response => response.json())
    }
}