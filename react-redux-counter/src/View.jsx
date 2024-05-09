import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { DELETE_USER } from './action/crudAction';

const View = () => {
    const dispatch = useDispatch();
    const record = useSelector(state => state.crud.users);

  return (
    <div align="center">
        <h1>View User</h1>
        <table border={1}>
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
                    record.map((item)=>{
                        const {id,name,phone} = item
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>
                                    <button onClick={ () => dispatch(DELETE_USER(id)) }>Delete</button> ||
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
  )
}

export default View
