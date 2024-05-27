import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { DELETE_USER, GET_USER } from '../redux/action/action';

const View = () => {
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const alluser = useSelector(state => state.crud.users); 
    

    useEffect(() => {
        dispatch(GET_USER());
    },[])

    return (
        <div align="center">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Srno</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser && Object.entries(alluser).map(([key,value])=>{
                            return(
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value.name}</td>
                                    <td>{value.phone}</td>
                                    <td>
                                        <button onClick={ () => dispatch(DELETE_USER(key)) } >Delete</button>
                                      
                                        <button onClick={ () => navigate(`/edit`,{state : [key,value]}) }>Edit</button>
                                       
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to={`/`}>Add</Link>
        </div>
    )
}

export default View
