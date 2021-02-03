import { RECEIVE_USERS } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            let shapedUserData = Object.assign(...Object.entries(action.users).map(([_, user]) => (
                {
                    [user.id]: {
                        id: user.id,
                        name: user.name,
                        avatarURL: user.avatarURL,
                    }
                }
            )))
            return {
                ...state,
                ...shapedUserData
            }
        default:
            return state
    }
}