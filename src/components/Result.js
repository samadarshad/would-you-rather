import React, { Component } from 'react'
import {
    Button,
    Divider,
    Form,
    Radio,
    Card,
    Header,
    Progress,
} from 'semantic-ui-react'
import ResultCard from './ResultCard'

class Result extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <>
                <Header size='large'>
                    Results:
                </Header>
                <ResultCard />
                <ResultCard />
            </>
        )
    }

}

export default Result