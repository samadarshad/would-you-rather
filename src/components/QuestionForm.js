import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
    Button,
    Divider,
    Form,
    Radio,
    Header,
} from 'semantic-ui-react'
import { handleAddAnswer } from '../actions/answers'

class QuestionForm extends Component {
    state = {
        answer: '',
        toHome: false,
    }
    handleChange = (e, { value }) => this.setState({ answer: value })

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.AddAnswer(this.state.answer)

        this.setState({
            answer: '',
            toHome: true
        })
    }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <>
                <Header size='large'>
                    Would You Rather...
                </Header>
                <Form
                    onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <Radio
                            label={this.props.question.optionOne}
                            name='radioGroup'
                            value='optionOne'
                            checked={this.state.answer === 'optionOne'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label={this.props.question.optionTwo}
                            name='radioGroup'
                            value='optionTwo'
                            checked={this.state.answer === 'optionTwo'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>


                    <Divider hidden />
                    <Button color='green' fluid type='submit'
                        disabled={this.state.answer === ''}>Submit</Button>
                </Form>
            </>
        )
    }

}

function mapStateToProps({ questions, users, authedUser }, { id }) {

    const question = questions[id] ?? null;
    const user = question ? users[questions[id].author] : null;
    return {
        question,
        user,
        authedUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    function AddAnswer(answer) {
        dispatchProps.dispatch(handleAddAnswer(answer, stateProps.question.id, stateProps.authedUser))
    }
    return {
        AddAnswer,
        question: stateProps.question,
        user: stateProps.user
    }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(QuestionForm)
