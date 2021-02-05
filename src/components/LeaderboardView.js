import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAskedQuestionIdsByUserId, getAnsweredQuestionIdsByUserId } from '../helper'
import LeaderboardCard from './LeaderboardCard'
import { Redirect } from 'react-router-dom'
class LeaderboardView extends Component {
    render() {
        if (this.props.unauthed)
            return <Redirect to='/signin' />

        return (
            <>
                {this.props.sorted.map((userAndScore) => (
                    <LeaderboardCard key={userAndScore.id} userAndScore={userAndScore} />
                ))}
            </>
        )
    }
}

function mapStateToProps({ users, questions, answers, authedUser }) {
    const allUserIds = Object.values(users).map((user) => (user.id))
    const values =
        allUserIds.map((id) => ({
            id: id,
            asked: getAskedQuestionIdsByUserId(questions, id),
            answered: getAnsweredQuestionIdsByUserId(answers, id)
        }))

    const scored =
        Object.values(values).map(
            ({ id, asked, answered }) => ({
                id: id,
                asked: asked.length,
                answered: answered.length,
                score: (asked.length + answered.length)
            }))
    const sorted =
        scored.sort((a, b) => b.score - a.score).map((value, index) => ({
            index,
            ...value
        }))

    return {
        sorted,
        unauthed: authedUser === null
    }
}

export default connect(mapStateToProps)(LeaderboardView)