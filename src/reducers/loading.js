import { SET_LOADING, LoadingStatus } from '../actions/loading'

export default function loading(state = LoadingStatus.IDLE, action) {
    switch (action.type) {
        case SET_LOADING:
            return action.status
        default:
            return state
    }
}