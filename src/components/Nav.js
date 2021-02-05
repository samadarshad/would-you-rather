import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Menu,
    Image
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
    handleSignOut = (e) => {
        e.preventDefault()
        this.props.SignOut()
    }

    render() {
        const { user } = this.props

        return (
            <>
                <Menu pointing secondary style={{ "paddingTop": '10px' }}>
                    <Menu.Item
                        as={NavLink}
                        name='home'
                        to='/' exact
                    />
                    <Menu.Item
                        as={NavLink}
                        to='/add'
                        name='new question'
                    />
                    <Menu.Item
                        as={NavLink}
                        to='/leaderboard'
                        name='leader board'
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