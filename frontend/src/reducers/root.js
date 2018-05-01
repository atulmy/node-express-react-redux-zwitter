// Imports
import { combineReducers } from 'redux'

// App Imports
import user from './user'
import { tweets, tweet } from './tweets'

export default combineReducers({
  user,
  tweets,
  tweet
})
