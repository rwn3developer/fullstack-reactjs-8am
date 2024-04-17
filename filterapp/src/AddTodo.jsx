// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// const AddTodo = ({getrecord}) => {
//     const [task,setTask] = useState("");
//     const [date,setDate] = useState("");
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         getrecord(task,date)
//         alert("Task Add");
//         setTask("");
//         setDate(""); 
//     }
//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className="col-lg-9">
//                     <h1>Todo App</h1>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                             <Form.Label>Task :- </Form.Label>
//                             <Form.Control type="text" onChange={ (e) => setTask(e.target.value) } value={task} placeholder="Enter Task" />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                             <Form.Label>Date :- </Form.Label>
//                             <Form.Control type="date" onChange={ (e) => setDate(e.target.value) } value={date} />
//                         </Form.Group>
//                         <Button type='submit' variant="primary">Submit</Button>
//                     </Form> 
//                 </div>
//             </div>

//         </div>
//     )
// }
// export default AddTodo
