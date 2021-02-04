import 'semantic-ui-css/semantic.min.css'
import Nav from './views/Nav'
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionView from './views/QuestionView'
import ResultView from './views/ResultView'
import CreateNewQuestionView from './views/CreateNewQuestionView'
import LeaderboardView from './views/LeaderboardView'
import SignedOutView from './views/SignedOutView'
import HomepageView from './views/HomepageView'
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
        <Container>
          <Nav />
          {this.props.loading === true
            ? "Loading"
            :
            <>
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
              <Route path='/questions/:id' component={QuestionView} />
            </>
          }

        </Container>
      </Router >
    );
  }
}

function mapStateToProps({ loading }) {
  return {
    loading: loading !== LoadingStatus.SUCCEEDED
  }
}

export default connect(mapStateToProps)(App)
