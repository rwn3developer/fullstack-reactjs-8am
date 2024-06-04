import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import {Link, useLocation} from 'react-router-dom'

const Leftsidebar = () => {

    const location = useLocation();

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <ListGroup as="ul">
                            <ListGroup.Item as={Link} to={`/dashboard`} active={location.pathname === "/dashboard"}>
                               Dashboard
                            </ListGroup.Item>
                            <ListGroup.Item as={Link} to={`/category`}  active={location.pathname === "/category"}>Category</ListGroup.Item>
                            <ListGroup.Item as={Link} to={`/product`} active={location.pathname === "/product"}>Product</ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leftsidebar
