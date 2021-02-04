import users from './users'
import questions from './questions'
import answers from './answers'
import authedUser from './authedUser'
import loading from './loading'
import { combineReducers } from 'redux'

export default combineReducers({
    loading,
    authedUser,
    users,
    questions,
    answers,
})