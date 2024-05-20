import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [todos,setTodos] = useState([]);
  const getRecord = async() => {
    try{
      let {data} = await axios.get('https://dummyjson.com/todos',{
        headers:{
          'Content-Type' : 'application/json'
        },
      });
      setTodos(data.todos)
    }catch(err){
      console.log(err);
      return false;
    }
  }

  useEffect(()=>{
    getRecord()
  },[])

  return (
    <>
      <h1>Api</h1>
      {
        todos.map((val)=>{
          return (
              <h3 key={val.id}>Task :- {val.todo}</h3>
          )
        })
      }
    </>
  )
}

export default App


