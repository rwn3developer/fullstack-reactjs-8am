import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

const View = () => {
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
        <div className='container'>
            <div className="row">
                <table align='center' border="1">
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
                                            <button onClick={() => deleteUser(id)} type='button'>Delete</button>
                                            <Link to={`/edit/${id}`}>
                                                <button>Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Link to={`/add`}>Add</Link>
            </div>
        </div>
    )
}

export default View
