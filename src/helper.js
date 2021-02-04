export function getAskedQuestionIdsByUserId(questions, userId) {
    return Object.values(questions).filter((question) => (question.author === userId)).map((question) => question.id)
}

export function getAnsweredQuestionIdsByUserId(answers, userId) {
    const allQuestionIds = Object.values(answers).map((answer) => answer.questionId)
    const answeredQuestionIds = allQuestionIds.filter((questionId) => {
        const answeredOptionOne = answers[questionId].optionOne.includes(userId)
        const answeredOptionTwo = answers[questionId].optionTwo.includes(userId)
        const answered = answeredOptionOne || answeredOptionTwo
        return (answered)
    })
    return answeredQuestionIds
}