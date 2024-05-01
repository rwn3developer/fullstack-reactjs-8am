import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import UserList from './UserList';

const About = () => {

  const [data, setData] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [searchFilter,setSearchFilter] = useState([])

  const deleteUser = (id) => {
    let alldata = [...data];
    let d = alldata.filter(item => item.id != id);
    setData(d);
    localStorage.setItem('users',JSON.stringify(d));
    alert("Record delete")
  }

  const searchName = (value) => {
      let s = data.filter((item)=>{
        return item.name.toLowerCase().includes(value.toLowerCase());
      })
      setSearchFilter(s)
  }


  return (
    <>
      <Header />
      <h1>View User</h1>
      <UserList 
          data={data}
          deleteUser={deleteUser}
          searchName={searchName}
          searchFilter={searchFilter}
      />
    </>
  )
}

export default About
