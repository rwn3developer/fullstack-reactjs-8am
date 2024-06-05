import React, { useState } from 'react'
import Header from '../../components/Header'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [auth,setAuth] = useAuth();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
   
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            let all = await fetch(`http://localhost:8000/api/v1/auth/loginuser`,{
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    email,password
                })
            });
            let res = await all.json();  
            if(res.success){
                localStorage.setItem('auth',JSON.stringify(res));
                setAuth({
                    ...auth,
                    token : res.token,
                    user : res.user
                })
                
                toast.success(res.message)
                if(res.user?.role === "admin"){
                    navigate('/dashboard')
                }else{
                    navigate('/home')
                }
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
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={ (e) => setEmail(e.target.value) } value={email} placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={ (e) => setPassword(e.target.value) } value={password} placeholder="password" />
                    </Form.Group>
                    <Button type='submit' variant="success">Submit</Button>{' '}
                </Form>
            </Container>
            <ToastContainer/>
        </>

    )
}

export default Login
