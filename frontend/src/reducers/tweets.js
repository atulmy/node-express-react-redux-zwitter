// App Imports
import { SET_TWEETS } from '../actions/tweets';

export default function tweets(state = [], action = {}) {
    console.log('reducer / tweets');
    console.log(action);

    switch(action.type) {
        case SET_TWEETS:
            return action.tweets;

        default:
            return state;
    }
}