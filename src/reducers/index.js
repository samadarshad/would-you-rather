import users from './users'
import questions from './questions'
import { combineReducers } from 'redux'

export default combineReducers({
    users: users,
    questions: questions,
})