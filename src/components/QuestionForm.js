import React, { Component } from 'react'
import {
    Button,
    Divider,
    Form,
    Radio,
    Header,
} from 'semantic-ui-react'

class QuestionForm extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <>
                <Header size='large'>
                    Would You Rather...
                </Header>
                <Form>
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


                    <Divider hidden />
                    <Button color='green' fluid>Submit</Button>
                </Form>
            </>
        )
    }

}

export default QuestionForm