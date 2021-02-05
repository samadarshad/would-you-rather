import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Segment,
    Menu,
} from 'semantic-ui-react'
import QuestionPreview from './QuestionPreview'

class HomepageView extends Component {
    state = {
        activeItem: 'unanswered'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        if (this.props.unauthed)
            return <Redirect to='/signin' />

        return (
            <>
                <Menu widths={2} attached='top'>
                    <Menu.Item
                        name='unanswered'
                        active={activeItem === 'unanswered'}
                        onClick={this.handleItemClick}
                    >
                        Unanswered Questions
                    </Menu.Item>

                    <Menu.Item
                        name='answered'
                        active={activeItem === 'answered'}
                        onClick={this.handleItemClick}
                    >
                        Answered Questions
                    </Menu.Item>
                </Menu>
                <Segment attached>
                    {activeItem === 'answered'
                        ? this.props.answeredQuestionIds.map((id) => (
                            <QuestionPreview key={id} id={id} />
                        ))
                        : this.props.unansweredQuestionIds.map((id) => (
                            <QuestionPreview key={id} id={id} />
                        ))
                    }
                </Segment>
            </>
        )
    }
}

function mapStateToProps({ questions, answers, authedUser }) {
    const allQuestionIds = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const answeredQuestionIds = allQuestionIds.filter((questionId) => {
        const answeredOptionOne = answers[questionId]?.optionOne.includes(authedUser)
        const answeredOptionTwo = answers[questionId]?.optionTwo.includes(authedUser)
        const answered = answeredOptionOne || answeredOptionTwo
        return (answered)
    })
    const unansweredQuestionIds = allQuestionIds.filter((questionId) => !answeredQuestionIds.includes(questionId))
    return {
        answeredQuestionIds: answeredQuestionIds,
        unansweredQuestionIds: unansweredQuestionIds,
        unauthed: authedUser === null
    }
}

export default connect(mapStateToProps)(HomepageView)