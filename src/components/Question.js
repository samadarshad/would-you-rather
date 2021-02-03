import React, { Component } from 'react'
import {
    Header,
    Label,
    Segment,
    Grid,
    Image,
    Table,
    Container,
} from 'semantic-ui-react'
import QuestionForm from '../components/QuestionForm'

class Question extends Component {

    render() {
        return (
            <>
                <Header attached='top' block>
                    Tyler asks:
                </Header>
                <Segment attached>
                    <Grid columns={3} divided>
                        <Grid.Column className='five wide column'>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' circular centered />
                        </Grid.Column>
                        <Grid.Column className='eleven wide column'>
                            <QuestionForm />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </>
        )
    }

}

export default Question



