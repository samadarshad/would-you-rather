import React, { Component } from 'react'
import {
    Container,
    Button,
    Divider,
    Grid,
    Header,
    Segment,
    Image,
    Form,
    Radio,
} from 'semantic-ui-react'

class QuestionView extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <Container>
                <Header attached='top'>
                    Tyler asks:
                </Header>
                <Segment attached>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' circular />
                            </Grid.Column>

                            <Grid.Column>
                                <Header>
                                    Would You Rather...
                                </Header>
                                <Form>
                                    <Form.Field>
                                        Selected value: <b>{this.state.value}</b>
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio
                                            label='Choose this'
                                            name='radioGroup'
                                            value='this'
                                            checked={this.state.value === 'this'}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio
                                            label='Or that'
                                            name='radioGroup'
                                            value='that'
                                            checked={this.state.value === 'that'}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>
                                </Form>
                                <Divider hidden />
                                <Button color='green' fluid>Submit</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>
        )
    }
}

export default QuestionView