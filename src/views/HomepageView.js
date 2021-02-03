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
    Menu,
} from 'semantic-ui-react'
import Question from '../components/Question'

class HomepageView extends Component {
    state = {
        activeItem: 'unanswered'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <>
                <Menu widths={2} attached='top'>
                    <Menu.Item
                        name='unanswered'
                        active={activeItem === 'unanswered'}
                        onClick={this.handleItemClick}
                    >
                        Unanswered Questions
                    </Menu.Item>

                    <Menu.Item
                        name='answered'
                        active={activeItem === 'answered'}
                        onClick={this.handleItemClick}
                    >
                        Answered Questions
                    </Menu.Item>
                </Menu>
                <Segment attached>
                    <Question />
                    <Question />
                    <Question />
                </Segment>
            </>
        )
    }
}

export default HomepageView