import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
    Container,
    Grid,
    Header,
    Segment,
    Image,
} from 'semantic-ui-react'
import { getAnsweredQuestionIdsByUserId } from '../helper'
import QuestionForm from '../components/QuestionForm'
import Result from '../components/Result'

const showResult = (user, id) => (
    <>
        <Header attached='top' block>
            Asked by {user.name}
        </Header>
        <Segment attached>
            <Grid columns={3} divided>
                <Grid.Column className='five wide column'>
                    <Image src={user.avatarURL} size='medium' circular centered />
                </Grid.Column>
                <Grid.Column className='eleven wide column'>
                    <Result id={id} />
                </Grid.Column>
            </Grid>
        </Segment>
    </>
)

const showQuestion = (user, id) => ( //convert these into react components
    <>
        <Header attached='top' block>
            {user.name} asks:
        </Header>
        <Segment attached>
            <Grid columns={3} divided>
                <Grid.Column className='five wide column'>
                    <Image src={user.avatarURL} size='medium' circular centered />
                </Grid.Column>
                <Grid.Column className='eleven wide column'>
                    <QuestionForm id={id} />
                </Grid.Column>
            </Grid>
        </Segment>
    </>
)

class QuestionView extends Component {

    render() {
        if (this.props.unauthed)
            return <Redirect to='/signin' />

        return (
            <>
                {this.props.alreadyAnswered
                    ? showResult(this.props.user, this.props.id)
                    : showQuestion(this.props.user, this.props.id)
                }
            </>
        )
    }
}

function mapStateToProps({ questions, users, authedUser, answers }, props) {
    const { id } = props.match.params ?? null;

    const question = questions[id] ?? null;
    const user = question ? users[questions[id].author] : null;
    const alreadyAnswered = getAnsweredQuestionIdsByUserId(answers, authedUser).includes(id)
    return {
        id,
        question,
        user,
        alreadyAnswered,
        unauthed: authedUser === null
    }
}

export default connect(mapStateToProps)(QuestionView)