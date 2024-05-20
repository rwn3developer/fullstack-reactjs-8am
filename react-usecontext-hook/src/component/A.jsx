import React, { useContext } from 'react'
import UserContext from '../UserContext'
import B from './B'

const A = () => {

    const user = useContext(UserContext)


  return (
    <div>
       <B/>
    </div>
  )
}

export default A
