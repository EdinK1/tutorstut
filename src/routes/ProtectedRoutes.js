import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDocument } from 'react-firebase-hooks/firestore'
import { firestore } from '../firebase'
import {
  StudentIntro,
  StudentHome,
  TutorHome,
  TutorIntro,
  NotFound,
} from '../pages'

const ProtectedRoutes = ({ currentUser }) => {
  const [value, loading, error] = useDocument(
    firestore.doc(`users/${currentUser.uid}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )

  if (error) return <p>error...</p>
  if (loading) return <p>loading...</p>

  const { role } = value && value.data()

  return role === 'student' ? (
    <Switch>
      <Route path='/:id/get-started'>
        <StudentIntro />
      </Route>
      <Route path='/:id'>
        <StudentHome />
      </Route>
    </Switch>
  ) : role === 'tutor' ? (
    <Switch>
      <Route path='/:id/get-started'>
        <TutorIntro />
      </Route>
      <Route path='/:id'>
        <TutorHome />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route to='*'>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default ProtectedRoutes
