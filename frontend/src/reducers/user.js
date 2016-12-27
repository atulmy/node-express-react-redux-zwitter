// Imports
import isEmpty from 'lodash/isEmpty';

// App Imports
import { USER_CURRENT_SET } from '../actions/user';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action = {}) => {
    console.log('reducer / user');
    console.log(action);

    switch(action.type) {
        case USER_CURRENT_SET:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };

        default:
            return state;
    }
}