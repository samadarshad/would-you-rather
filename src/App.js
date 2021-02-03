import 'semantic-ui-css/semantic.min.css'
import Nav from './components/Nav'
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionView from './views/QuestionView'
import ResultView from './views/ResultView'
import CreateNewQuestionView from './views/CreateNewQuestionView'
import LeaderboardView from './views/LeaderboardView'
import SignedOutView from './views/SignedOutView'
import HomepageView from './views/HomepageView'
import {
  Container,
} from 'semantic-ui-react'

function App() {


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
        <Route path='/:id'>
          <QuestionView />
          <ResultView />
        </Route>

      </Container>
    </Router>
  );
}

export default App;
