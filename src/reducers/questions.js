import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    let shapedQuestionData
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            shapedQuestionData = Object.assign(...Object.entries(action.questions).map(([_, question]) => (
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
        case ADD_QUESTION:
            let question = action.question
            shapedQuestionData =
            {
                [question.id]: {
                    id: question.id,
                    author: question.author,
                    optionOne: question.optionOne.text,
                    optionTwo: question.optionTwo.text,
                    timestamp: question.timestamp,
                }
            }
            return {
                ...state,
                ...shapedQuestionData
            }
        default:
            return state
    }
}