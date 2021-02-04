import React, { Component } from 'react'
import {
    Menu,
    Divider,
    Image
} from 'semantic-ui-react'
import { withRouter, NavLink } from 'react-router-dom'

class Nav extends Component {
    state = { activeItem: 'home' } //get current page URL from state

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    //events: handleSignOut => dispatch action to clear Authed user


    // bug below: <a> cannot be decendant of <a> (i.e. menu item inside navlink)
    render() {
        const { activeItem } = this.state

        return (
            <>
                <Menu pointing secondary style={{ "paddingTop": '10px' }}>
                    <Menu.Item
                        as={NavLink}
                        name='home'
                        to='/'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={NavLink}
                        to='/new'
                        name='new question'
                        active={activeItem === 'new question'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={NavLink}
                        to='/leaderboard'
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
            </>
        )
    }
}


export default Nav