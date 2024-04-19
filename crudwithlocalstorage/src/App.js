import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavHeader } from "./header";
import { AddForm } from "./AddForm";
import vector from "./vector.png";
import { useEffect, useState } from "react";

function App() {
  const [record, setRecord] = useState([]);
  const [single,setSingle] = useState({});
  const onchange = (data) =>{
    setRecord(data)
  }

  useEffect(()=>{
    let all = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
    setRecord(all)
  },[])

  const deleteUser = (id) => {
      let data = record.filter(item => item.id != id);
      localStorage.setItem('data',JSON.stringify(data));
      setRecord(data)
      alert("Record Deleted"); 
  }

  const editUser = (id) => {
      let data = record.find(item => item.id == id);
      setSingle(data)
  }
  

  return (
    <div className="container">
      <div className="row">
        <NavHeader />
        <h1 className="text-center">Create New Member</h1>
        <div className="d-flex align-items-center">
          <div className="col-md-6">
            <img src={vector} alt="vector"></img>
          </div>
          <div className="col-md-6">
            <AddForm onchange={onchange} single={single}/>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((val,index) => {
              return (
                <tr key={`${val.id}-${index}`}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.phone}</td>
                  <td>
                    <button onClick={ () => deleteUser(val.id) } className="btn btn-danger">Delete</button>
                    <button onClick={ () => editUser(val.id) } className="btn btn-primary mx-2">Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
