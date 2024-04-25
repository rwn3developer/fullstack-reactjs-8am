import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

export const AddForm = ({ onchange, single }) => {

    // const [editid, setEditId] = useState("")
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [data, setData] = useState([])


    const hendalsubmit = (e) => {
        e.preventDefault();
        let obj = {
            id : Math.floor(Math.random()*1000),
            name,phone
        }
        let alldata = JSON.parse(localStorage.getItem("user")) || [];
        let mergedata = [...alldata,obj];
        setData(mergedata)
        localStorage.setItem('user',JSON.stringify(mergedata))
        setName("");
        setPhone("");
    }


  

    return (
        <Form onSubmit={hendalsubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={ (e) => setName(e.target.value) } value={name} placeholder="Enter Name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" onChange={ (e) => setPhone(e.target.value) } value={phone} placeholder="Enter Phone Number"/>
            
        
                <button type='submit' className='btn btn-success mt-4' >Save</button>
                    
            

            </Form.Group>
        </Form>
    );
}

