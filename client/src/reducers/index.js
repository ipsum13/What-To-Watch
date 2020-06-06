import { combineReducers } from 'redux'
import auth from './auth';
import likedMovies from './likedMovies'


export default combineReducers({
    auth,
    likedMovies
})