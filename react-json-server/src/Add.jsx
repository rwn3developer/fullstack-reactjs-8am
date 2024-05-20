import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [record, setRecord] = useState([]);

    const getUser = async () => {
        try {
            let all = await fetch(`http://localhost:8000/users`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let res = await all.json();
            setRecord(res)

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        getUser();
    }, [])


    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            let all = await fetch(`http://localhost:8000/users`, {
                method: "POST",
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
                toast.success('User successfully create');
                setName("")
                setPhone("")
                getUser();
            } else {
                toast.error('please try again')
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const deleteUser = async(id) => {
        try{
            let all = await fetch(`http://localhost:8000/users/${id}`,{
                method : "DELETE"
            })
            let res = await all.json()
            toast.error("Record Delete")
            getUser();
        }catch(err){
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

            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((item) => {
                            const { id, name, phone } = item
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{phone}</td>
                                    <td>
                                        <button onClick={ () => deleteUser(id) } type='button'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <ToastContainer />

        </div>
    )
}

export default Add
