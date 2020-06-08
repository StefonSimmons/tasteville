import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import LogIn from './LogIn'
import Register from './Register'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Route path='/user/login' render={() => (
          <LogIn
          handleLogInSbmt = {this.props.handleLogInSbmt}
          />
          )
        } />
        
        <Route path='/user/register' render={() => (
          <Register
          handleRegisterSbmt = {this.props.handleRegisterSbmt}
          />
          )
        }/>
      </main>
    )
}
}


