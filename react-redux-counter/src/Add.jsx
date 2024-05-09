import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_USER } from './action/crudAction';
import { Link } from 'react-router-dom';

const Add = () => {
    const dispatch = useDispatch();
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            id : Math.floor(Math.random()*10000),
            name,phone
        }
        dispatch(ADD_USER(obj))
        alert("Record Add")
        setName("");
        setPhone("");
    }

  return (
    <div align="center">
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
            Name : <input type="text" onChange={ (e) => setName(e.target.value) } value={name}/><br></br>
            Phone : <input type="text" onChange={ (e) => setPhone(e.target.value) } value={phone}/><br></br>
            <input type='submit' />
        </form>
        <Link to={`/crud`}>View</Link>
    </div>
  )
}

export default Add
