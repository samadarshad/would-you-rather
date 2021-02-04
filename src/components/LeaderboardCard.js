import React, { Component } from 'react'
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
        const { userAndScore } = this.props
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
                        <Header size='large'>{userAndScore.id}</Header>

                        <Table basic='very' fluid>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as='h4'>
                                            Answered questions
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>22</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as='h4'>
                                            Created questions
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>15</Table.Cell>
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
                                <Label circular color='green' size='huge'>10</Label>
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>
                </Grid>
            </Segment>


        )
    }

}

export default LeaderboardCard



