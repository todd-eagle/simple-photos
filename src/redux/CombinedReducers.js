import { combineReducers } from 'redux'
import auth from './reducers/AuthReducer'
import profile from './reducers/DataReducer'

export default combineReducers({
    auth,
    profile
})