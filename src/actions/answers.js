import { _saveQuestionAnswer } from '../_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveAnswers(questions) { //this is not a typo - we are indeed recieving questions from the database, then reducing into answers
    return {
        type: RECEIVE_ANSWERS,
        questions
    }
}

export function addAnswer(questionAnswer) {
    return {
        type: ADD_ANSWER,
        questionAnswer
    }
}

export function handleAddAnswer(answer, questionId, userId) {
    return (dispatch) => {
        dispatch(showLoading())
        const questionAnswer = {
            authedUser: userId,
            qid: questionId,
            answer: answer
        }
        return _saveQuestionAnswer(questionAnswer)
            .then(() => {
                dispatch(addAnswer(questionAnswer))
                dispatch(hideLoading())
            })
    }
}

