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
    Dropdown,
} from 'semantic-ui-react'

class SignedOutView extends Component {
    render() {

        const friendOptions = [
            {
                key: 'Jenny Hess',
                text: 'Jenny Hess',
                value: 'Jenny Hess',
                image: { avatar: true, src: 'https://react.semantic-ui.com//images/avatar/small/jenny.jpg' },
            },
            {
                key: 'Elliot Fu',
                text: 'Elliot Fu',
                value: 'Elliot Fu',
                image: { avatar: true, src: 'https://react.semantic-ui.com//images/avatar/small/elliot.jpg' },
            },
            {
                key: 'Stevie Feliciano',
                text: 'Stevie Feliciano',
                value: 'Stevie Feliciano',
                image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/large/matthew.png' },
            }
        ]


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
                        options={friendOptions}
                    />
                    <br />
                    <Button color='teal' fluid>Sign In</Button>
                </Segment>
            </>
        )
    }
}

export default SignedOutView