import 'semantic-ui-css/semantic.min.css'
import Nav from './components/Nav'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionView from './components/QuestionView'
import CreateNewQuestionView from './components/CreateNewQuestionView'
import LeaderboardView from './components/LeaderboardView'
import SignedOutView from './components/SignedOutView'
import HomepageView from './components/HomepageView'
import LoadingBar from 'react-redux-loading'
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
