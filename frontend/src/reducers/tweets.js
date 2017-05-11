// App Imports
import { SET_TWEETS, SET_TWEET } from '../actions/tweet';

export function tweets(state = [], action = {}) {
    switch(action.type) {
        case SET_TWEETS:
            return action.tweets;

        default:
            return state;
    }
}

export function tweet(state = {}, action = {}) {
    switch(action.type) {
        case SET_TWEET:
            return action.tweet;

        default:
            return state;
    }
}