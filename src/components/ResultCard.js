import React, { Component } from 'react'
import {
    Divider,
    Progress,
    Label,
    Message,
} from 'semantic-ui-react'
import { getOptionOneUserIdsByQuestionId, getOptionTwoUserIdsByQuestionId } from '../helper'
import { connect } from 'react-redux'


class ResultCard extends Component {

    render() {
        return (
            <>
                {this.props.authedUserSelectedOption
                    ?
                    <Message info>
                        <Label circular color='yellow' size='medium' floating>Your Vote</Label>
                        <Message.Header>{this.props.questionText}</Message.Header>
                        <Divider hidden />
                        <Progress percent={this.props.percentage} progress color='teal' size='medium'>{this.props.count} out of {this.props.total} votes</Progress>
                    </Message>
                    :
                    <Message>
                        <Message.Header>{this.props.questionText}</Message.Header>
                        <Divider hidden />
                        <Progress percent={this.props.percentage} progress color='teal' size='medium'>{this.props.count} out of {this.props.total} votes</Progress>
                    </Message>
                }
            </>
        )
    }

}

function mapStateToProps({ questions, authedUser, answers }, props) {
    const { option, questionId } = props;

    const question = questions[questionId] ?? null;
    const usersOptionOne = getOptionOneUserIdsByQuestionId(answers, questionId)
    const usersOptionTwo = getOptionTwoUserIdsByQuestionId(answers, questionId)
    const total = usersOptionOne.length + usersOptionTwo.length
    const questionText = question[option]

    let count, percentage, authedUserSelectedOption
    switch (option) {
        case 'optionOne':
            count = usersOptionOne.length
            authedUserSelectedOption = usersOptionOne.includes(authedUser)
            break
        case 'optionTwo':
            count = usersOptionTwo.length
            authedUserSelectedOption = usersOptionTwo.includes(authedUser)
            break
        default:
            throw new Error('no option defined');
    }
    percentage = (100 * count / total).toPrecision(2)
    return {
        questionText,
        count,
        percentage,
        total,
        authedUserSelectedOption,
    }
}

export default connect(mapStateToProps)(ResultCard)