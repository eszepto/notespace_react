import logo from './logo.svg';
import Navb from './component/Navbar/Navbar'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';

const App = () => {
  
    return (
      <div className="App">
        <Navb></Navb>
        <header className="App-header"></header>

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
export default App