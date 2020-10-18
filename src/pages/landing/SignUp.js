import React, { useState } from 'react'
import { auth, firestore } from '../../firebase'
import { useHistory } from 'react-router-dom'

const TeacherSignUp = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('tutor')
  const [error, setError] = useState()
  let history = useHistory()

  const handleSignUp = async e => {
    e.preventDefault()
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firestore.collection('users').doc(auth.currentUser.uid).set({
          name,
          lastName,
          email,
          role,
        })
        history.push(`/${auth.currentUser.uid}/get-started`)
      })
      .catch(error => {
        setError(error.message)
      })
  }

  return (
    <form onSubmit={handleSignUp}>
      {error && <p>{error}</p>}
      <input
        type='text'
        placeholder='Your Name'
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Your LastName'
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
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
      <select onChange={e => setRole(e.target.value)}>
        <option disabled value='role'>
          I'm signing up as a
        </option>
        <option value='tutor'>Tutor</option>
        <option value='student'>Student</option>
      </select>
      <p>
        {name} {lastName} {email} {password} {role}
      </p>
      <button type='submit'>Create Account</button>
    </form>
  )
}

export default TeacherSignUp
