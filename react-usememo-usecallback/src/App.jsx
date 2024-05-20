import React, { useCallback, useEffect, useMemo, useState } from 'react';

const App = () => {

  const [no,setNo] = useState(0)

  const [todo,setTodo] = useState([])

  const addNo = useMemo(()=>{
      return addSum(10,2)
  },[])

  const plusIncrement = () => {
    setNo(no + 1)
  }

  const looping = useMemo(()=>{
      return loop()
  })

  const addTodo = useCallback(()=>{
    alert("hiii")
  },[todo])

  return (
    <>
        <h1>Sum :- {addNo}</h1>
        <h2>count :- {no}</h2>
        <h3>Looping value :- {looping}</h3>
        <button onClick={ () => plusIncrement() }>+</button>
        <button onClick={ () => addTodo() }>Add Todo</button>
    </>
  );
};

  const addSum = (no1,no2) => {
    return no1 + no2
  }

  const loop = () => {
    let no = 0
    for(let i=1;i<=10;i++){
        no = no + i
    }
    return no;
  }

export default App;