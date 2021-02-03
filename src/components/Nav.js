import React, { Component } from 'react'
import {
    Menu,
    Divider,
    Image
} from 'semantic-ui-react'

class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <>
                <Menu pointing secondary style={{ "padding-top": '10px' }}>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='new question'
                        active={activeItem === 'new question'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='leader board'
                        active={activeItem === 'leader board'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>

                        <div>

                            <span>Tyler Mcginnis</span>
                            <Image
                                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                                avatar
                                spaced="left"
                                verticalAlign='bottom' />
                        </div>
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
                <Divider hidden />
            </>
        )
    }
}


export default Nav