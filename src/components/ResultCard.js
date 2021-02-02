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
} from 'semantic-ui-react'


// E1F8F9 background color for selected

class ResultCard extends Component {

    render() {
        return (

            <Card positive fluid style={{ 'background-color': "#F9F8F9" }} >

                <Card.Content>
                    <Label color='yellow' ribbon='right'>
                        Your Vote
                     </Label>
                    <Card.Header size='small'>Option 1</Card.Header>
                    <Divider hidden />
                    <Progress percent={44} progress>2 out of 3 votes</Progress>
                </Card.Content>
            </Card >

        )
    }

}

export default ResultCard