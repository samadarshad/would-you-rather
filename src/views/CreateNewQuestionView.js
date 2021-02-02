import React, { Component } from 'react'
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

class CreateNewQuestionView extends Component {
    render() {
        return (
            <Container>
                <Header size='huge' attached='top' textAlign='center' >
                    Create New Question
                </Header>
                <Segment attached>
                    <p>
                        Complete the question:
                    </p>
                    <Header>
                        Would you rather...
                    </Header>
                    <Form>
                        <Form.Field>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Divider horizontal>Or</Divider>
                        <Form.Field>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Button color='green' fluid>Submit</Button>
                    </Form>
                </Segment>
            </Container>
        )
    }
}

export default CreateNewQuestionView