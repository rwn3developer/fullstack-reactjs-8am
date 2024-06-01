import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {

    const [auth, setAuth] = useAuth();
    const navigate = useNavigate()

    // useEffect(()=>{
    //     let originaltoken = auth?.token
    //     let verifyToken = JSON.parse(localStorage.getItem('auth'))


    //     if (originaltoken != verifyToken?.token) {
    //         setAuth({
    //             ...auth,
    //             user: null,
    //             token: null
    //         })
    //         alert('logout');
    //         localStorage.removeItem('auth')
    //         navigate('/');
    //     }
    // },[])

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: null
        })    
        localStorage.removeItem('auth')
        alert('logout');
        navigate('/');

    }


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            {
                                !auth.token ? (
                                    <>
                                        <Nav.Link as={Link} to={`/`}>Login</Nav.Link>
                                        <Nav.Link as={Link} to={`/register`}>Register</Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
                                        <Nav.Link as={Link} to={`/home`}>Home</Nav.Link>
                                        <Nav.Link >Product</Nav.Link>
                                    </>
                                )
                            }







                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
