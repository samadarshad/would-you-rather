import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAskedQuestionIdsByUserId, getAnsweredQuestionIdsByUserId } from '../helper'
import {
    Container,
    Grid,
    Header,
    Segment,
    Image,
    Form,
    Button,
    Divider,
} from 'semantic-ui-react'
import LeaderboardCard from '../components/LeaderboardCard'

class LeaderboardView extends Component {
    // no events
    // need to pass down: users details
    render() {
        return (
            <>
                {this.props.sorted.map((userAndScore) => (
                    <LeaderboardCard key={userAndScore.id} userAndScore={userAndScore} />
                ))}
            </>
        )
    }
}

function mapStateToProps({ users, questions, answers }) {
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
        scored.sort((a, b) => b.score - a.score)
    debugger
    return {
        sorted
    }
}

export default connect(mapStateToProps)(LeaderboardView)