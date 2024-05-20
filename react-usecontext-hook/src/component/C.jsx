import React, { createContext, useContext } from 'react'
import UserContext from '../UserContext'

const C = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h1>C Component</h1>
        <h2>Name :- {user.user}</h2>
    </div>
  )
}

export default C