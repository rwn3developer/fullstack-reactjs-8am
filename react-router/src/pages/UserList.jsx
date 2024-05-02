import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const UserList = ({ data, deleteUser ,searchName,searchFilter,handleSort,handleStatus}) => {
    
    let alldata = searchFilter.length!=0 ? searchFilter : data

    return (
        <Container>
            <div className="row">
                <h1 align="center">View User</h1>

                <div className='col-12 d-flex p-4 justify-content-center'>
                    <div className='col-4'>
                    <select className='form-control' onChange={handleStatus}>
                            <option value="">---select---</option>
                            <option value="all">all</option>
                            <option value="active">Active</option>
                            <option value="deactive">Deactive</option>
                       </select>
                    </div>
                    <div className='col-4'>
                        <form className='px-5'>
                            <input type="text" onChange={ (e) => searchName(e.target.value) } className='form-control' placeholder='search name' />
                        </form>
                    </div>
                    <div className='col-4'>
                       <select className='form-control' onChange={handleSort}>
                            <option value="">---select---</option>
                            <option value="ascending">Ascending</option>
                            <option value="decending">Decending</option>
                       </select>
                    </div>
                </div>

                {
                    alldata.map((item) => {
                        return (
                            <div key={item.id} className="col-lg-4 mb-5 d-flex justify-content-center">

                                <Card key={item.id} style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{`Name :- ${item.name}`}</Card.Title>
                                        <Card.Text>
                                            {`Phone :- ${item.phone}`}
                                            {`Status :- ${item.status}`}
                                        </Card.Text>
                                        <Button onClick={() => deleteUser(item.id)} variant="danger">Delete</Button>
                                        <Link to={`/edit/${item.id}`}>
                                            <Button className='mx-3' variant="primary">Edit</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </div>
                        )
                    })
                }

            </div>
        </Container>
    )
}

export default UserList
