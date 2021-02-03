export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS'

export function receiveAnswers(questions) {
    return {
        type: RECEIVE_ANSWERS,
        questions
    }
}