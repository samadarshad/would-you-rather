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
    Grid,
    Image,
} from 'semantic-ui-react'



class LeaderboardCard extends Component {


    render() {

        const square = { width: 10, height: 10 }

        return (
            <Segment>
                <div className="ui top left corner yellow label">
                    <i className="heart icon"></i>
                </div>
                <Grid divided>
                    <Grid.Column className='four wide column'>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' circular />
                    </Grid.Column>
                    <Grid.Column className='nine wide column'>
                        <Header size='large'>Sarah Edo</Header>
                        <Segment.Group>
                            <Segment>Answered Questions<span textAlign='right'>10</span></Segment>
                            <Segment>Created Questions</Segment>
                        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column className='three wide column'>
                        <Segment.Group>
                            <Segment>Score</Segment>
                            <Segment circular inverted style={square}>10</Segment>
                        </Segment.Group>
                    </Grid.Column>
                </Grid>
                <Segment circular inverted style={square}>10</Segment>
            </Segment>


        )
    }

}

export default LeaderboardCard




{/* <Grid columns={2}>
                <Grid.Column>
                    <Image
                        fluid
                        label={{ as: 'a', corner: 'left', icon: 'heart' }}
                        src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                    />
                </Grid.Column>

                <Grid.Column>
                    <Image
                        fluid
                        label={{ as: 'a', color: 'red', corner: 'right', icon: 'save' }}
                        src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                    />
                </Grid.Column>
            </Grid> */}
