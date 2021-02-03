import React, { Component } from 'react'
import {
    Menu,
    Divider,
    Image
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    state = { activeItem: 'home' } //get current page URL from state

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    //events: handleSignOut => dispatch action to clear Authed user



    render() {
        const { activeItem } = this.state

        return (
            <>
                <Menu pointing secondary style={{ "padding-top": '10px' }}>
                    <NavLink to='/' exact activeClassName='active'>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        />
                    </NavLink>
                    <NavLink to='/new' exact activeClassName='active'>
                        <Menu.Item
                            name='new question'
                            active={activeItem === 'new question'}
                            onClick={this.handleItemClick}
                        />
                    </NavLink>
                    <NavLink to='/leaderboard' exact activeClassName='active'>
                        <Menu.Item
                            name='leader board'
                            active={activeItem === 'leader board'}
                            onClick={this.handleItemClick}
                        />
                    </NavLink>

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