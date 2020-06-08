import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LogIn extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state
    const { handleLogInSbmt } = this.props

    return (
      <>
        <form onSubmit={(e) => {
          e.preventDefault()
          //this.state is the logInData
          handleLogInSbmt(this.state)
        }}>
          <h3>Log In</h3>
          <label htmlFor="username">username:
          <input id="username" type="text" value={username} name="username" onChange={this.handleChange} />
          </label>
          <label htmlFor="password">password:
          <input id="password" type="password" value={password} name="password" onChange={this.handleChange} />
          </label>
          <button>Log In</button>
        </form>
        <Link to='/user/register'>Register</Link>
      </>
    )
  }
}
