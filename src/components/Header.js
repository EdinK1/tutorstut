import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import { AuthContext } from '../context'

const Header = () => {
  const { currentUser } = useContext(AuthContext)
  let history = useHistory()

  return (
    <header>
      <nav>
        <ul>
          {currentUser ? (
            <li>
              <button
                onClick={() => auth.signOut().then(() => history.push('/'))}
              >
                Log Out
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='about'>About</Link>
              </li>
              <li>
                <Link to='create-account'>Create Account</Link>
              </li>
              <li>
                <Link to='login'>Log In</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
