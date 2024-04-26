import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
const Edit = () => {
    const {editid} = useParams();
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [record,setRecord] = useState((JSON.parse(localStorage.getItem('users'))) || []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let olddata = [...record];
    let up = olddata.map((val)=>{
        if(val.id == editid){
            return {
                ...val,
                name : name,
                phone : phone
            }
        }
        return val;
    })
    localStorage.setItem("users",JSON.stringify(up));
    alert("Record update");
    navigate('/view');

  }


  

  useEffect(()=>{
    let data = record.find(item => item.id == editid);
    if(data){
        setName(data.name)
        setPhone(data.phone)  
    }
  },[editid])




  return (
    <>
      <Header />
      <div align="center">
        <h1>Edit User</h1>
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
            <button type='submit' className='btn btn-success'>Update</button>
          </Form>
        </div>
        <Link to={`/view`}>View</Link>
      </div>
    </>
  )
}

export default Edit
