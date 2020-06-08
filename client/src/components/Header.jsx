import React from 'react'
import { Link } from 'react-router-dom'


export default function Header({currentUser, handleLogout}) {
  return (
    <div>
      <header>
        <h1>Tasteville</h1>
        {
          currentUser
            ?
            <>
              <h4>{currentUser.username}</h4>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/user/login'>LogIn / Register</Link>
        }
      </header>
      <hr/>
    </div>
  )
}
