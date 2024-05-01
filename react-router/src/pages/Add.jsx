import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [record,setRecord] = useState([])
  const [status,setStatus] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id : Math.floor(Math.random()*10000),name,phone,status
    }

    let olddata = [...record,obj];
    setRecord(olddata);
    localStorage.setItem('users',JSON.stringify(olddata));
    alert("Record Add");
    setName("");
    setPhone("");
    navigate('/view');
  }

  useEffect(()=>{
      let alldata = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
      setRecord(alldata)
  },[])

  return (
    <>
      <Header />
      <div align="center">
        <h1>Add User</h1>
        <div  className="box w-25">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={ (e) => setName(e.target.value) } value={name} placeholder="Enter name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Phone :- </Form.Label>
              <Form.Control type="tel" onChange={ (e) => setPhone(e.target.value) } value={phone} placeholder="Enter no"/>
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Status :- </Form.Label>
              <select onChange={ (e) => setStatus(e.target.value) } value={status} className='form-control'>
                  <option disabled value="" selected >---select status----</option>
                  <option  value="active">Active</option>
                  <option value="deactive">Deactive</option>
              </select>
            </Form.Group>


            <button type='submit' className='btn btn-success'>Submit</button>
          </Form>
        </div>
        <Link to={`/view`}>View</Link>
      </div>
    </>
  )
}

export default Home
