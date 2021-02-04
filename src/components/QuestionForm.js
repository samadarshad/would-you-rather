import React, { Component } from 'react'
import { connect } from 'react-redux'
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
                            label={this.props.question.optionOne}
                            name='radioGroup'
                            value='optionOne'
                            checked={this.state.value === 'optionOne'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label={this.props.question.optionTwo}
                            name='radioGroup'
                            value='optionTwo'
                            checked={this.state.value === 'optionTwo'}
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

function mapStateToProps({ questions, users }, { id }) {

    const question = questions[id] ?? null;
    const user = question ? users[questions[id].author] : null;
    return {
        question,
        user,
    }
}

export default connect(mapStateToProps)(QuestionForm)
