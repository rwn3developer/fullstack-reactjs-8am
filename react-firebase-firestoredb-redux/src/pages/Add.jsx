import React, { useState } from 'react'
import Header from '../component/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { ADD_EMP } from '../redux/action/action';

const Add = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const id = Math.floor(Math.random()*10000);


    const handleSubmit = (e)=>{
        e.preventDefault()
        const obj = {
            name : name,
            phone : phone
        }
        dispatch(ADD_EMP(obj))
        setName("")
        setPhone("")
        alert("add")
        navigate('/view');
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
