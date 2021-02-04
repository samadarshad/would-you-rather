import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Segment,
} from 'semantic-ui-react'
import QuestionPreview from '../components/QuestionPreview'
import HomepageMenu from '../components/HomepageMenu'

class HomepageView extends Component {

    render() {
        return (
            <>
                <HomepageMenu />
                <Segment attached>
                    {this.props.questionIds.map((id) => (
                        <QuestionPreview key={id} id={id} />
                    ))}
                </Segment>
            </>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(HomepageView)