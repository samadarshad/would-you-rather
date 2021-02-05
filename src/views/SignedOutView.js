import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
    Container,
    Grid,
    Header,
    Segment,
    Image,
    Form,
    Button,
    Divider,
    Dropdown,
} from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'

class SignedOutView extends Component {
    state = {
        userId: ''
    }

    handleChange = (e, { value }) => this.setState({ userId: value })
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.SignIn(this.state.userId)

        this.setState({
            userId: ''
        })
    }
    render() {
        if (this.props.authed)
            return <Redirect to='/' />

        return (
            <>
                <Header size='huge' attached='top' block textAlign='center'>
                    Welcome to the Would You Rather App!
                    <Header.Subheader>Please sign in to continue</Header.Subheader>
                </Header>
                <Segment attached >
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' centered />
                    <Header size='medium' color='teal' textAlign='center'>Sign In</Header>
                    <Dropdown
                        placeholder='Select Friend'
                        fluid
                        selection
                        options={this.props.usersOptions}
                        onChange={this.handleChange}
                    />
                    <br />
                    <Button color='teal' fluid
                        disabled={this.state.userId === ''}
                        onClick={this.handleSubmit}>Sign In</Button>
                </Segment>
            </>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    const usersOptions = Object.values(users).map((user) => ({
        key: user.id,
        text: user.name,
        value: user.id,
        image: { avatar: true, src: user.avatarURL }
    }))

    return {
        usersOptions,
        authed: authedUser !== null
    }
}

function mapDispatchToProps(dispatch) {
    function SignIn(userId) {
        dispatch(setAuthedUser(userId))
    }
    return {
        SignIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedOutView)