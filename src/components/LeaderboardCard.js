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
        const { user, asked, answered, score, position } = this.props
        const positionToColor = {
            0: 'yellow',
            1: 'grey',
            2: 'brown'
        }

        return (
            <Segment>
                {position <= 2
                    ? <div className={`ui top left corner ${positionToColor[position]} label`}>
                        <i className="trophy icon"></i>
                    </div>
                    : null
                }

                <Grid divided>
                    <Grid.Column className='four wide column'>
                        <Image src={user.avatarURL} size='small' circular centered />
                    </Grid.Column>
                    <Grid.Column className='nine wide column'>
                        <Header size='large'>{user.name}</Header>

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
    const user = users[userAndScore.id]
    const asked = userAndScore.asked
    const answered = userAndScore.answered
    const score = userAndScore.score
    const position = userAndScore.index
    return {
        user,
        asked,
        answered,
        score,
        position
    }
}

export default connect(mapStateToProps)(LeaderboardCard)
