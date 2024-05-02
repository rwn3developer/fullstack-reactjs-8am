import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import UserList from './UserList';

const About = () => {

  const [data, setData] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [searchFilter, setSearchFilter] = useState([])

  const deleteUser = (id) => {
    let alldata = [...data];
    let d = alldata.filter(item => item.id != id);
    setData(d);
    localStorage.setItem('users', JSON.stringify(d));
    alert("Record delete")
  }

  const searchName = (value) => {
    let s = data.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    })
    setSearchFilter(s)
  }

  const handleSort = (e) => {
    let value = e.target.value;
    let result = [...data]
    if (value === "ascending") {
      result = result.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      setData(result)
      
    } else if(value === "decending") {
      result = result.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
      setData(result)
    }
    setSearchFilter(result)
  }

  const handleStatus = (e) => {
    let value = e.target.value
    let result = []
    if(value === "active"){
      result = data.filter(item => item.status === "active")
    }else if(value === "deactive"){
      result = data.filter(item => item.status === "deactive")
    }
    setSearchFilter(result)
  }




  return (
    <>
      <Header />
      <UserList
        data={data}
        deleteUser={deleteUser}
        searchName={searchName}
        searchFilter={searchFilter}
        handleSort={handleSort}
        handleStatus={handleStatus}
      />
    </>
  )
}

export default About
