import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Menu,
    Divider,
    Image
} from 'semantic-ui-react'
import { withRouter, NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
class Nav extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    //events: handleSignOut => dispatch action to clear Authed user

    handleSignOut = (e) => {
        e.preventDefault()

        this.props.SignOut()
    }

    // bug below: <a> cannot be decendant of <a> (i.e. menu item inside navlink)
    render() {
        const { activeItem } = this.state
        const { user } = this.props
        return (
            <>
                <Menu pointing secondary style={{ "paddingTop": '10px' }}>
                    <Menu.Item
                        as={NavLink}
                        name='home'
                        to='/' exact
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
                    {user !== null
                        ?
                        <Menu.Menu position='right'>
                            <div>
                                <span>{user.name}</span>
                                <Image
                                    src={user.avatarURL}
                                    avatar
                                    spaced="left"
                                    verticalAlign='bottom' />
                            </div>
                            <Menu.Item
                                name='logout'
                                active={activeItem === 'logout'}
                                onClick={this.handleSignOut}
                            />
                        </Menu.Menu>

                        : null
                    }


                </Menu>
            </>
        )
    }
}



function mapStateToProps({ users, authedUser }) {
    const user = users[authedUser] ?? null
    return {
        user,
    }
}

function mapDispatchToProps(dispatch) {
    function SignOut() {
        dispatch(setAuthedUser(null))
    }
    return {
        SignOut
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav)