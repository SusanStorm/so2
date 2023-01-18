import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import usersReducer from './users'
import facebookReducer from './facebookReducer'
import fbpostsReducer from './fbPostsReducer'
import {fetchAllUsers} from './fetchUsersReducer'
export default combineReducers({
    authReducer, currentUserReducer, questionsReducer, usersReducer,facebookReducer, fbpostsReducer,fetchAllUsers
})