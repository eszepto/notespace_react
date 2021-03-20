import logo from './logo.svg';
import ReactDOM from 'react-dom'
import './App.css';
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
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
        <Route path="/"  />
        <Route path="/upload" />
        <Route path="/login" />
        <Route path="/register"/>
      </div>
    )
  }
}
export default App