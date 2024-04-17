import React from 'react'
import Table from 'react-bootstrap/Table';
const Viewtodo = ({ todolist }) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <h2>View Todo</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Srno</th>
                                <th>Task</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todolist.map((item,i) => {
                                    return (
                                        <tr>
                                            <td>{++i}</td>
                                            <td>{item.task}</td>
                                            <td>{item.date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
export default Viewtodo
