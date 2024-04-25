import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const About = () => {

  const [data, setData] = useState(JSON.parse(localStorage.getItem('users')) || []);


  const deleteUser = (id) => {
    let alldata = [...data];
    let d = alldata.filter(item => item.id != id);
    setData(d);
    localStorage.setItem('users',JSON.stringify(d));
    alert("Record delete")
  }


  return (
    <>
      <Header />
      <h1>View User</h1>
      <div className="row">
        {
          data.map((item) => {
            return (
              <div className="col-lg-4 mb-5 d-flex justify-content-center">

                <Card key={item.id} style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{`Name :- ${item.name}`}</Card.Title>
                    <Card.Text>
                      {`Phone :- ${item.phone}`}
                    </Card.Text>
                    <Button onClick={ () => deleteUser(item.id) } variant="danger">Delete</Button>
                    <Button variant="primary">Edit</Button>
                  </Card.Body>
                </Card>

              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default About
