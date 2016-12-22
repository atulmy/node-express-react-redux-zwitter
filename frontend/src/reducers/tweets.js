// App Imports
import { SET_TWEETS } from '../actions/tweets';

export default function tweets(state = [], action = {}) {
    switch(action.type) {
        case SET_TWEETS:
            return action.tweets;

        default:
            return state;
    }
}