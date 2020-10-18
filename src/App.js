import React from 'react'
import { Router } from './routes'
import { AuthProvider } from './context'

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
