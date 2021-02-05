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

            const optionOne = (state[qid]?.optionOne || []).concat((answer === 'optionOne') ? [authedUser] : [])
            const optionTwo = (state[qid]?.optionTwo || []).concat((answer === 'optionTwo') ? [authedUser] : [])

            shapedAnswerData =
            {
                [qid]: {
                    ...state[qid],
                    questionId: qid,
                    optionOne,
                    optionTwo,
                }
            }

            return {
                ...state,
                ...shapedAnswerData
            }
        default:
            return state
    }
}