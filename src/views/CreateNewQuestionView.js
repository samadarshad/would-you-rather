import React, { Component } from 'react'
import { connect } from 'react-redux'
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
import { handleAddQuestion } from '../actions/questions'

class CreateNewQuestionView extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }

    handleChange = (e) => {
        this.setState((prevState) => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state

        this.props.AddQuestion(optionOne, optionTwo)

        this.setState({
            optionOne: '',
            optionTwo: '',
            // toHome: id ? false : true
        })
    }
    //event: add the new question to the store, dispatch an event
    //controlled component - disable the submit button unless both fields are nonempty
    render() {
        return (
            <>
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
                    <Form
                        onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <input
                                placeholder='Option One'
                                name='optionOne'
                                onChange={this.handleChange}
                                value={this.state.optionOne}
                            />
                        </Form.Field>
                        <Divider horizontal>Or</Divider>
                        <Form.Field>
                            <input
                                placeholder='Option Two'
                                name='optionTwo'
                                onChange={this.handleChange}
                                value={this.state.optionTwo}
                            />
                        </Form.Field>
                        <Button color='green' fluid
                            disabled={this.state.optionOne === '' || this.state.optionTwo === ''}
                            type='submit'
                        >Submit</Button>
                    </Form>
                </Segment>
            </>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    function AddQuestion(optionOne, optionTwo) {
        dispatchProps.dispatch(handleAddQuestion(optionOne, optionTwo, stateProps.authedUser))
    }
    return {
        AddQuestion
    }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CreateNewQuestionView)