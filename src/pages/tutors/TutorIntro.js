import React, { useState, createRef } from 'react'
import { storage } from '../../firebase'

const TutorIntro = () => {
  const [bio, setBio] = useState()
  const [workHistory, setWorkHistory] = useState()
  const resume = createRef()
  const avatar = createRef()
  // const avatarRef = storage.ref().child(`images/tutors/${avatar}`)

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <main>
      <h1>
        Welcome to Tutors Tut. We're happy that you have chosen to be a tutor at
        Tutors Tut
      </h1>
      <h2>
        Before we can approve your account, we need to know a bit more about
        you.
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <h3>Personal info</h3>
        <label htmlFor='avatar'>
          Upload your photo (Supported type .PNG, .JPG)
        </label>
        <input
          type='file'
          name='avatar'
          ref={avatar}
          accept='image/*'
          required
        />
        <label htmlFor='bio'>Tell us a bit about yourself</label>
        <textarea
          name='bio'
          rows='5'
          cols='50'
          value={bio}
          placeholder='Life story, hobbies, etc..'
          onChange={e => setBio(e.target.value)}
          required
        />
        <h3>Professional info</h3>
        <label htmlFor='work-history'>
          Tell us a bit about your work history
        </label>
        <textarea
          name='work-history'
          rows='5'
          cols='50'
          value={workHistory}
          placeholder='Teaching experience, years of experience, etc...'
          onChange={e => setWorkHistory(e.target.value)}
          required
        />
        <label htmlFor='resume'>Upload your resume (Supported type .PDF)</label>
        <input
          type='file'
          name='resume'
          ref={resume}
          accept='application/pdf'
          required
        />
        <p>
          {bio} {workHistory}
        </p>
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default TutorIntro
