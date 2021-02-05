import React, { Component } from 'react'
import {
    Header,
} from 'semantic-ui-react'
import ResultCard from './ResultCard'

class Result extends Component {
    render() {
        return (
            <>
                <Header size='large'>
                    Results:
                </Header>
                <ResultCard option="optionOne" questionId={this.props.id} />
                <ResultCard option="optionTwo" questionId={this.props.id} />
            </>
        )
    }

}

export default Result