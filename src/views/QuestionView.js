import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Grid,
    Header,
    Segment,
    Image,
} from 'semantic-ui-react'
import QuestionForm from '../components/QuestionForm'

class QuestionView extends Component {
    //event: submit answer to store, using the currently authed user during the action
    render() {
        return (
            <>
                <Header attached='top' block>
                    {this.props.user.name} asks:
                </Header>
                <Segment attached>
                    <Grid columns={3} divided>
                        <Grid.Column className='five wide column'>
                            <Image src={this.props.user.avatarURL} size='medium' circular centered verticalAlign='middle' />
                        </Grid.Column>
                        <Grid.Column className='eleven wide column'>
                            <QuestionForm id={this.props.id} />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </>
        )
    }
}

function mapStateToProps({ questions, users }, props) {
    const { id } = props.match.params ?? null;

    const question = questions[id] ?? null;
    const user = question ? users[questions[id].author] : null;
    return {
        id,
        question,
        user,
    }
}

export default connect(mapStateToProps)(QuestionView)