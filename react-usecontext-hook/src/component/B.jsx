import React, { useContext } from 'react'
import UserContext from '../UserContext'
import C from './C'

const B = () => {

    const user = useContext(UserContext)

  return (
    <div>
        <C/>
    </div>
  )
}

export default B