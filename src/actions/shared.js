import { _getUsers, _getQuestions } from '../_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { receiveAnswers } from '../actions/answers'
import { setLoading, LoadingStatus } from '../actions/loading'
import { showLoading, hideLoading } from 'react-redux-loading'

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
                dispatch(setLoading(LoadingStatus.SUCCEEDED))
                dispatch(hideLoading())
            })
            .catch(() => {
                dispatch(setLoading(LoadingStatus.FAILED))
            })
    }
}