import { RECEIVE_ANSWERS, ADD_ANSWER } from '../actions/answers'

export default function answers(state = {}, action) {
    let shapedAnswerData
    switch (action.type) {
        case RECEIVE_ANSWERS:
            shapedAnswerData = Object.assign(...Object.entries(action.questions).map(([_, question]) => (
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
        case ADD_ANSWER:
            const {
                authedUser,
                qid,
                answer
            } = action.questionAnswer

            shapedAnswerData =
            {
                [qid]: {
                    ...state[qid],
                    optionOne: state[qid].optionOne.concat((answer === 'optionOne') ? authedUser : []),//Object.assign({}, state[qid].optionOne, (answer === 'optionOne') ? {authedUser} : ''),
                    optionTwo: state[qid].optionTwo.concat((answer === 'optionTwo') ? authedUser : []),
                }
            }
            debugger
            return {
                ...state,
                ...shapedAnswerData
            }
        default:
            return state
    }
}