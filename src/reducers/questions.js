import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            let shapedQuestionData = Object.assign(...Object.entries(action.questions).map(([_, question]) => (
                {
                    [question.id]: {
                        id: question.id,
                        author: question.author,
                        optionOne: question.optionOne.text,
                        optionTwo: question.optionTwo.text,
                        timestamp: question.timestamp,
                    }
                }
            )))
            return {
                ...state,
                ...shapedQuestionData
            }
        default:
            return state
    }
}