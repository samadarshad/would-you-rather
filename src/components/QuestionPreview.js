import React, { Component } from 'react'
import {
    Header,
    Label,
    Segment,
    Grid,
    Image,
    Table,
    Container,
    Button,
} from 'semantic-ui-react'
import QuestionForm from '../components/QuestionForm'

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
                            <p>...write Javascript...</p>
                            <Button basic fluid color='teal'>
                                View Poll
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </>
        )
    }

}

export default QuestionPreview



