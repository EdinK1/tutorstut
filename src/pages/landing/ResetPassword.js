import React, { useState } from 'react'
import { auth } from '../../firebase'

const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState()
  const [error, setError] = useState()

  const handlePasswordReset = async e => {
    e.preventDefault()
    await auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setMessage('Check your inbox')
        setSubmitted(true)
      })
      .catch(error => setError(error.message))
  }

  return (
    <main>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      <form onSubmit={handlePasswordReset}>
        <input
          type='email'
          placeholder='Your Email'
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p>{email}</p>
        <button disabled={submitted} type='submit'>
          Reset Password
        </button>
      </form>
    </main>
  )
}

export default ResetPassword
