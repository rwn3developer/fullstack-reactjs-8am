import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
    const {id} = useParams();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    // const [single,setSingle] = useState("")
  
    const getSingleRecord = async() => {
        try{
            let all = await fetch(`http://localhost:8000/users/${id}`,{
                method : 'GET',
                headers : {
                    'Content-type' : 'application/json'
                }
            })
            let res = await all.json();
            // setSingle(res)
            setName(res.name)
            setPhone(res.phone)
        }catch(err){
            console.log(err);
            return false;
        }
    }

    useEffect(()=>{
        getSingleRecord()
    },[])
    

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            let all = await fetch(`http://localhost:8000/users/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    phone: phone
                })
            })
            let res = await all.json();
            if (res) {
                toast.success('User successfully update');
                setName("")
                setPhone("")
            } else {
                toast.error('please try again')
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    



    return (
        <div align="center">
            <h2>Json server</h2>
            <form onSubmit={handlesubmit}>
                Name : <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                Phone : <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
                <input type="submit" value="submit" />
            </form><br></br><br></br>
            <Link to={`/`}>View</Link>
            <ToastContainer />

        </div>
    )
}

export default Edit
