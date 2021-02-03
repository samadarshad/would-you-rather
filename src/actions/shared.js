import { _getUsers } from '../_DATA'
import { receiveUsers } from '../actions/users'

// this could be a Promise.all() to do in parallel
export function handleInitialData() {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
    }
}