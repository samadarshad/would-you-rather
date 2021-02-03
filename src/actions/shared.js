import { _getUsers, _getQuestions } from '../_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'

// this could be a Promise.all() to do in parallel
export function handleInitialData() {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
            .then(_getQuestions)
            .then((questions) => {
                dispatch(receiveQuestions(questions))
            })
    }
}