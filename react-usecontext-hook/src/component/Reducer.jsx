import React, { useReducer } from 'react'


const  initialstate = 0;

const reducer = (state=initialstate,action) => {
    switch(action){
        case 'inc':
            return state + 1
        default:
            return state;
    }
}

const Reducer = () => {

    const [no,setNo] = useReducer(reducer,initialstate);
    

  return (
    <div align="center">
        <h1>Reducer hook</h1>
        <h2>Count :- {no}</h2>
        <button onClick={ () => setNo("inc") }>+</button>
    </div>
  )
}

export default Reducer
