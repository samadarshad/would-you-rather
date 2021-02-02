import 'semantic-ui-css/semantic.min.css'
import Nav from './components/Nav'
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionView from './views/QuestionView'

function App() {
  return (
    <Router>
      <>
        <Nav />
        <QuestionView />
      </>
    </Router>
  );
}

export default App;
