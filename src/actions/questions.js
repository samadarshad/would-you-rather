import { _saveQuestion } from '../_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
    return (dispatch) => {
        dispatch(showLoading())
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author
        })
            .then((formattedQuestion) => {
                dispatch(addQuestion(formattedQuestion))
                dispatch(hideLoading())
            })
    }
}

