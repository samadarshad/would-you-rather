import users from './users'
import questions from './questions'
import answers from './answers'
import authedUser from './authedUser'
import loading from './loading'
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser,
    users,
    questions,
    answers,
    loading,
    loadingBar: loadingBarReducer,
})