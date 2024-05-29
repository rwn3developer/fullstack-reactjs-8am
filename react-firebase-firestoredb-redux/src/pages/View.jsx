import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { GET_USER , DELETE_EMP } from "../redux/action/action";



const View = () => {
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const [record,setRecord] = useState([])

    useEffect(()=>{
        dispatch(GET_USER())
    },[])


    const alluser = useSelector(state => state.crud.users); 


    useEffect(()=>{
        if(alluser){
           let record = alluser.docs.map(val => ({
                id : val.id,
                ...val.data()
           }))
           setRecord(record)
        }
    },[alluser])

   

    

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
                        record.map((value)=>{
                            return(
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.phone}</td>
                                    <td>
                                        <button onClick={ () => dispatch(DELETE_EMP(value.id)) } >Delete</button>
                                      
                                        <button onClick={ () => navigate(`/edit`,{state : value}) }>Edit</button>
                                       
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
