import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment } from './action/counterAction';
import { Link } from 'react-router-dom';

const Counter = () => {

    const dispatch = useDispatch();
    const no = useSelector(state => state.counter)
  return (
    <div>
        <h1>Counter app</h1>
        <h2>Count : {no}</h2>
        <button onClick={ () => dispatch(Increment())  }>+</button><br></br><br></br>

        <Link to={`/crud`}>Crud</Link>

    </div>
  )
}

export default Counter
