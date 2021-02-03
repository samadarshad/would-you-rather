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
            <>
                <LeaderboardCard />
                <LeaderboardCard />
                <LeaderboardCard />
            </>
        )
    }
}

export default LeaderboardView