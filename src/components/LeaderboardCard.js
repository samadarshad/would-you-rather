import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Header,
    Label,
    Segment,
    Grid,
    Image,
    Table,
} from 'semantic-ui-react'

class LeaderboardCard extends Component {

    render() {
        const { name, asked, answered, score } = this.props
        return (
            <Segment>
                <div className="ui top left corner yellow label">
                    <i className="trophy icon"></i>
                </div>
                <Grid divided>
                    <Grid.Column className='four wide column'>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='small' circular centered />
                    </Grid.Column>
                    <Grid.Column className='nine wide column'>
                        <Header size='large'>{name}</Header>

                        <Table basic='very' fluid>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as='h4'>
                                            Answered questions
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>{answered}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as='h4'>
                                            Created questions
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>{asked}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>


                    </Grid.Column>
                    <Grid.Column className='three wide column' verticalAlign='middle'>
                        <Segment.Group>
                            <Header attached='top' block textAlign='center'>
                                Score
                            </Header>
                            <Segment attached textAlign='center'>
                                <Label circular color='green' size='huge'>{score}</Label>
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>
                </Grid>
            </Segment>


        )
    }

}

function mapStateToProps({ users }, { userAndScore }) {
    const name = users[userAndScore.id].name
    const asked = userAndScore.asked
    const answered = userAndScore.answered
    const score = userAndScore.score
    return {
        name,
        asked,
        answered,
        score
    }
}

export default connect(mapStateToProps)(LeaderboardCard)
