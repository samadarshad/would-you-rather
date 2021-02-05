import React, { Component } from 'react'
import {
    Menu,
} from 'semantic-ui-react'

class HomepageMenu extends Component {
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
            </>
        )
    }
}

export default HomepageMenu