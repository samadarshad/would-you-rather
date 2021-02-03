import React, { Component } from 'react'
import {
    Container,
    Grid,
    Header,
    Segment,
    Image,
} from 'semantic-ui-react'
import Result from '../components/Result'

class ResultView extends Component {
    render() {
        return (
            <>
                <Header attached='top' block>
                    Asked by Tyler
                </Header>
                <Segment attached>
                    <Grid columns={3} divided>
                        <Grid.Column className='five wide column'>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' circular centered />
                        </Grid.Column>
                        <Grid.Column className='eleven wide column'>
                            <Result />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </>
        )
    }
}

export default ResultView