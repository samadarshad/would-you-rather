import React, { Component } from 'react'
import {
    Container,
    Grid,
    Header,
    Segment,
    Image,
} from 'semantic-ui-react'
import QuestionForm from '../components/QuestionForm'

class QuestionView extends Component {
    render() {
        return (
            <Container>
                <Header attached='top' block>
                    Tyler asks:
                </Header>
                <Segment attached>
                    <Grid columns={3} divided>
                        <Grid.Column className='five wide column'>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' circular />
                        </Grid.Column>
                        <Grid.Column className='eleven wide column'>
                            <QuestionForm />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Container>
        )
    }
}

export default QuestionView