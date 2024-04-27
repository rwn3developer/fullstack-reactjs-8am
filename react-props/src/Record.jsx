import React from 'react'

const Record = ({category,record,filter,filterrecord}) => {
  return (
    <div align="center">
        <h1>Filter App</h1>
        <button onClick={ () => filter("all") }>All</button>
        {
            category.map((val)=>{
                return (
                    <button onClick={ () => filter(val.category) } key={val.id}>{val.category}</button>
                )
            })
        }
        <h1>All Record</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    filterrecord.length == 0 ? (
                        record.map((val)=>{
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.category}</td>
                                    <td>{val.name}</td>
                                </tr>
                            )
                        })
                    ) : (
                        filterrecord.map((val)=>{
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.category}</td>
                                    <td>{val.name}</td>
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Record
