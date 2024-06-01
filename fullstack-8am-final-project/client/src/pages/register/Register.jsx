import React, { useState } from 'react'
import Header from '../../components/Header'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [city,setCity] = useState("")
    const [phone,setPhone] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            let all = await fetch(`http://localhost:8000/api/v1/auth/registeruser`,{
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    name,email,phone,password,city
                })
            });
            let res = await all.json();
            if(res.success){
                toast.success(res.message) 
                setName('')
                setPhone('')
                setEmail('')
                setCity('')
                setPassword('')
                
            }else{
                toast.danger(res.message)
            }
        }catch(err){
            console.log(err);
            return false;
        }
        
    }
    return (
        <>
            <Header />
            <Container>
                <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setName(e.target.value) } value={name} placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={ (e) => setEmail(e.target.value) } value={email} placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={ (e) => setPassword(e.target.value) } value={password} placeholder="password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setCity(e.target.value) } value={city} placeholder="city" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setPhone(e.target.value) } value={phone} placeholder="Phone" />
                    </Form.Group>
                    <Button type='submit' variant="success">Submit</Button>{' '}
                </Form>
            </Container>
            <ToastContainer/>
        </>

    )
}

export default Register
