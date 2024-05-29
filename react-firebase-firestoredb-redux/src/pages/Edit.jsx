import React, { useEffect, useState } from 'react'
import Header from '../component/Header'

import { useDispatch } from 'react-redux'
// import { ADD_USER, UPDATE_USER } from '../redux/action/action'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { EDIT_EMP } from '../redux/action/action'

const Edit = () => {
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [editid,setEditid] = useState("")
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
   


    const handleSubmit = (e)=>{
        e.preventDefault()
        const obj = {
            id : editid,
            name : name,
            phone : phone
        }
        dispatch(EDIT_EMP(obj))
        setName("")
        setPhone("")
        setEditid("")
        alert("update")
        navigate('/view');
    }

    useEffect(()=>{
        setEditid(location.state.id)
        setName(location.state.name)
        setPhone(location.state.phone)
    },[])

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

export default Edit
