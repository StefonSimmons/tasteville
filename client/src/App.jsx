import React, { Component } from 'react'
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import { loginUser, registerUser } from './services/auth'

export default class App extends Component {

  state = {
    currentUser: null,
  }

  handleLogInSbmt = async (logInData) => {
    const currentUser = await loginUser(logInData)
    this.setState({ currentUser })
  }

  handleRegisterInSbmt = async (registerData) => {
    const currentUser = await registerUser(registerData)
    this.setState({ currentUser })
  }

  handleLogOut = () => {
    this.setState({
      currentUser: null
    })
  }

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogOut}
        />

        <Main
          handleLogInSbmt={this.handleLogInSbmt}
          handleRegisterSbmt={this.handleRegisterSbmt}
        />

      </div>
    )
  }
}

