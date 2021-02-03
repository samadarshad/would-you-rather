import React, { Component } from 'react'
import {
    Container,
    Grid,
    Header,
    Segment,
    Image,
} from 'semantic-ui-react'
import QuestionForm from '../components/QuestionForm'
import Question from '../components/Question'

class QuestionView extends Component {
    //event: submit answer to store, using the currently authed user during the action
    render() {
        return (
            <Question />
        )
    }
}

export default QuestionView