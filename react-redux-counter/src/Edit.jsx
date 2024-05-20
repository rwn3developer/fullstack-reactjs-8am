import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { EDIT_USER, UPDATE_USER } from './action/crudAction';

const Edit = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {id} = useParams();
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")

    const singleUser = useSelector(state => state.crud.user);
    

    useEffect(()=>{
        dispatch(EDIT_USER(id))
        if(singleUser){
            setName(singleUser.name)
            setPhone(singleUser.phone)
        }
    },[singleUser])


    const handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            id : id,
            name : name,
            phone : phone
        }
       dispatch(UPDATE_USER(obj))
       alert("Record successfully update")
       navigate('/crud')

    }

   

  return (
    <div align="center">
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
            Name : <input type="text" onChange={ (e) => setName(e.target.value) } value={name}/><br></br>
            Phone : <input type="text" onChange={ (e) => setPhone(e.target.value) } value={phone}/><br></br>
            <input type='submit' />
        </form>
        <Link to={`/crud`}>View</Link>
    </div>
  )
}

export default Edit
