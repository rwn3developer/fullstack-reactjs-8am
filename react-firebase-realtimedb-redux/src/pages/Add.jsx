import React, { useState } from 'react'
import Header from '../component/Header'
import { getDatabase, set } from 'firebase/database'
import { app } from '../Firebase'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../redux/action/action'
import { Link, useNavigate } from 'react-router-dom'

const Add = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const id = Math.floor(Math.random()*10000);


    const handleSubmit = (e)=>{
        e.preventDefault()
        const obj = {
            userid : id,
            name : name,
            phone : phone
        }
        dispatch(ADD_USER(obj))
        setName("")
        setPhone("")
        alert("add")
    }

    return (
        <>
            <Header />
            <div align="center">
                <form onSubmit={handleSubmit}>
                    Name : <input type="text" onChange={ (e) => setName(e.target.value)} value={name}/><br></br>
                    Phone : <input type="text" onChange={ (e) => setPhone(e.target.value)} value={phone}/><br></br>
                    <input type="submit" /><br></br>
                    <Link to={`/view`}>View</Link>
                </form>
            </div>
        </>
    )
}

export default Add
