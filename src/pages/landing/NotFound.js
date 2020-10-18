import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
  const history = useHistory()
  return (
    <div>
      Looks like this page doesn't exist.
      <button onClick={() => history.goBack()}> Go Back</button>
    </div>
  )
}

export default NotFound
