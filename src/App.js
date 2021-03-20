import logo from './logo.svg';
import Navbar from './common/Navbar'

import ReactDOM from 'react-dom'
import './App.css';
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Working on Notespace...
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Switch>
          <Route path="/">
            
          </Route>
          <Route path="/note/:id">

          </Route>
          <Route path="/upload">

          </Route>
          <Route path="/login">

          </Route>
          <Route path="/register">
          
          </Route>
        </Switch>
      </div>
    )
  }
}
export default App