import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const Leftsidebar = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                               Dashboard
                            </ListGroup.Item>
                            <ListGroup.Item as="li">Category</ListGroup.Item>
                            <ListGroup.Item as="li">Product</ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leftsidebar
