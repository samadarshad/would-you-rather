import React, { Component } from 'react'
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
import LeaderboardCard from '../components/LeaderboardCard'

class LeaderboardView extends Component {
    render() {
        return (
            <Container>
                <LeaderboardCard />
                <LeaderboardCard />
                <LeaderboardCard />
            </Container>
        )
    }
}

export default LeaderboardView