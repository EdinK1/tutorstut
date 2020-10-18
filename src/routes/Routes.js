import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  Welcome,
  About,
  SignUp,
  Login,
  ResetPassword,
  NotFound,
} from '../pages'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Welcome />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/create-account'>
        <SignUp />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/forgot-password'>
        <ResetPassword />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes
