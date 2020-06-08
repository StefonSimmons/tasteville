import React, { Component } from 'react'

export default class LogIn extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password, email } = this.state
    const { handleRegisterSbmt } = this.props
    
    return (

      <form onSubmit={(e) => {
        e.preventDefault()
        //this.state is the RegisterData
        handleRegisterSbmt(this.state)
      }}>
        <h3>Register</h3>
        <label htmlFor="username">username:
          <input id="username" type="text" value={username} name="username" onChange={this.handleChange} />
        </label>
        <label htmlFor="email">email:
          <input id="email" type="email" value={email} name="email" onChange={this.handleChange} />
        </label>
        <label htmlFor="password">password:
          <input id="password" type="password" value={password} name="password" onChange={this.handleChange} />
        </label>
        <button>Log In</button>
      </form>
    )
  }
}
