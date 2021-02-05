import { _getUsers, _getQuestions } from '../_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { receiveAnswers } from '../actions/answers'
import { setAuthedUser } from '../actions/authedUser'
import { setLoading, LoadingStatus } from '../actions/loading'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

// move this to api.js file
function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}

export function handleInitialData() {
    return (dispatch) => {
        dispatch(setLoading(LoadingStatus.LOADING))
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(receiveAnswers(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(setLoading(LoadingStatus.SUCCEEDED))
                dispatch(hideLoading())
            })
            .catch(() => {
                dispatch(setLoading(LoadingStatus.FAILED))
            })
    }
}