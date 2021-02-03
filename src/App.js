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
      <>
        <Nav />
        <Container>

          <HomepageView />
          <SignedOutView />
          <LeaderboardView />
          <CreateNewQuestionView />
          <QuestionView />
          <ResultView />

        </Container>
      </>
    </Router>
  );
}

export default App;
