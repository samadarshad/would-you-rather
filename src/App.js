import 'semantic-ui-css/semantic.min.css'
import Nav from './containers/Nav'
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionView from './containers/QuestionView'
import ResultView from './containers/ResultView'
import CreateNewQuestionView from './containers/CreateNewQuestionView'
import LeaderboardView from './containers/LeaderboardView'
import SignedOutView from './containers/SignedOutView'
import HomepageView from './containers/HomepageView'
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
        <Container>
          <Nav />
          <Route path='/' exact>
            <HomepageView />
            <SignedOutView />
          </Route>
          <Route path='/leaderboard' exact>
            <LeaderboardView />
          </Route>
          <Route path='/new' exact>
            <CreateNewQuestionView />
          </Route>
          <Route path='/questions/:id'>
            <QuestionView />
            <ResultView />
          </Route>

        </Container>
      </Router >
    );
  }
}

export default connect()(App)
