import users from './users'
import questions from './questions'
import answers from './answers'
import { combineReducers } from 'redux'

export default combineReducers({
    users: users,
    questions: questions,
    answers: answers,
})