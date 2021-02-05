import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
    Grid,
    Header,
    Segment,
    Image,
} from 'semantic-ui-react'
import { getAnsweredQuestionIdsByUserId } from '../helper'
import QuestionForm from './QuestionForm'
import Result from './Result'

function ShowResult(props) {
    const { user, id } = props
    return (
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
}

function ShowQuestion(props) {
    const { user, id } = props
    return (
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
}

class QuestionView extends Component {

    render() {
        if (this.props.unauthed)
            return <Redirect to='/signin' />

        return (
            <>
                {this.props.alreadyAnswered
                    ? <ShowResult user={this.props.user} id={this.props.id} />
                    : <ShowQuestion user={this.props.user} id={this.props.id} />
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