import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './redux/action/action';


function App() {
  const dispatch = useDispatch();
  const no = useSelector(state => state.count);

  const plus = () => {
    dispatch(Increment())
  }


  const minus = () => {
    dispatch(Decrement())
  }
  

  return (
    <>
        <h2>Counter App</h2>
        <h3>Count :- {no}</h3>
        <button onClick={ () => plus() }>+</button>
        <button onClick={ () => minus() }>-</button>
    </>
  )
}

export default App
