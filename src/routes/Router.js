import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from '../context'
import { Header } from '../components'
import Routes from './Routes'
import ProtectedRoutes from './ProtectedRoutes'

const Router = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Header />
      {currentUser ? <ProtectedRoutes currentUser={currentUser} /> : <Routes />}
    </BrowserRouter>
  )
}

export default Router
