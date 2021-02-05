import 'semantic-ui-css/semantic.min.css'
import Nav from './views/Nav'
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionView from './views/QuestionView'
import CreateNewQuestionView from './views/CreateNewQuestionView'
import LeaderboardView from './views/LeaderboardView'
import SignedOutView from './views/SignedOutView'
import HomepageView from './views/HomepageView'
import LoadingBar from 'react-redux-loading'
import { Redirect } from 'react-router-dom'

import { LoadingStatus } from './actions/loading'
import { handleInitialData } from './actions/shared'
import {
  Container,
} from 'semantic-ui-react'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <LoadingBar />
        <Container>

          {this.props.loading === true
            ? null
            :
            <>
              <Nav />
              <Route exact path='/' component={HomepageView} />
              <Route exact path='/signin' component={SignedOutView} />
              <Route exact path='/leaderboard' component={LeaderboardView} />
              <Route exact path='/new' component={CreateNewQuestionView} />
              <Route path='/questions/:id' component={QuestionView} />
            </>
          }

        </Container>
      </Router >
    );
  }
}

function mapStateToProps({ loading, authedUser }) {
  return {
    loading: loading !== LoadingStatus.SUCCEEDED,
    authedUser
  }
}

export default connect(mapStateToProps)(App)
