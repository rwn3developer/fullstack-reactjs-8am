import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';


const Adminroute = () => {

    const [auth,setAuth] = useAuth()

   
    return(
        auth?.token && auth?.user?.role==="admin" ? <Outlet/> : <Navigate to={'/'}/>
    )
}

export default Adminroute
