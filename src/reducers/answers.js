import { RECEIVE_ANSWERS } from '../actions/answers'

export default function answers(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ANSWERS:
            let shapedAnswerData = Object.assign(...Object.entries(action.questions).map(([_, question]) => (
                {
                    [question.id]: {
                        questionId: question.id,
                        optionOne: question.optionOne.votes,
                        optionTwo: question.optionTwo.votes
                    }
                }
            )))
            return {
                ...state,
                ...shapedAnswerData
            }
        default:
            return state
    }
}