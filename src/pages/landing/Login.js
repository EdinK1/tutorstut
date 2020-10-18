import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()
  let history = useHistory()

  const handleLogin = async e => {
    e.preventDefault()
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(`/${auth.currentUser.uid}`)
      })
      .catch(error => setError(error.message))
  }

  return (
    <form onSubmit={handleLogin}>
      {error && <p>{error}</p>}
      <input
        type='email'
        placeholder='Your Email'
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Your Password'
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Link to='/forgot-password'>Forgot password?</Link>
      <button type='submit'>Log In</button>
    </form>
  )
}

export default Login
