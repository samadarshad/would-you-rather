import React, { Component } from 'react'
import {
    Segment,
} from 'semantic-ui-react'
import QuestionPreview from '../components/QuestionPreview'
import HomepageMenu from '../components/HomepageMenu'

class HomepageView extends Component {
    //no events
    //needs to pass down: authedUser, questions, responses, users

    render() {
        return (
            <>
                <HomepageMenu />
                <Segment attached>
                    <QuestionPreview />
                    <QuestionPreview />
                    <QuestionPreview />
                </Segment>
            </>
        )
    }
}

export default HomepageView