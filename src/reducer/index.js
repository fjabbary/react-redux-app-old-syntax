import { postReducer } from './postReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    posts: postReducer
})