import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Header,
    Segment,
    Grid,
    Image,
    Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class QuestionPreview extends Component {

    render() {
        return (
            <>
                <Header attached='top' block>
                    Tyler asks:
                </Header>
                <Segment attached>
                    <Grid columns={3} divided>
                        <Grid.Column className='five wide column'>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='small' circular centered />
                        </Grid.Column>
                        <Grid.Column className='eleven wide column'>
                            <Header size='medium'>
                                Would You Rather...
                            </Header>
                            <p>...{this.props.question.optionOne}...</p>
                            <Link to='/questions/1'>
                                <Button basic fluid color='teal'>
                                    View Poll
                            </Button>
                            </Link>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </>
        )
    }

}

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id] ?? null;
    return {
        question
    }
}

export default connect(mapStateToProps)(QuestionPreview)



