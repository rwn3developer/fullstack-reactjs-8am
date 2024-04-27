import React from 'react'
import Hoc from './Hoc'

const B = ({no,increment}) => {
  return (
    <div>
        <h1>B Component</h1>
        <h2>Counter App</h2>
        <h3>Counter :- {no}</h3>
        <button onClick={ () => increment() }>+</button>
    </div>
  )
}

export default Hoc(B)