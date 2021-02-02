import React, { Component } from 'react'
import {
    Button,
    Divider,
    Form,
    Radio,
    Card,
    Header,
    Progress,
    Label,
    Segment,
    Message,
} from 'semantic-ui-react'



class ResultCard extends Component {

    render() {
        return (

            <Message info>
                <Label color='yellow' ribbon='right'>
                    Your Vote
                    </Label>
                <Message.Header>Option 1</Message.Header>
                <Divider hidden />
                <Progress percent={44} progress>2 out of 3 votes</Progress>
            </Message>
        )
    }

}

export default ResultCard