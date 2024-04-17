import React from 'react'

const Food = ({ food }) => {
    return (
        <div className='container'>
            <div className="row justify-content-between">

                {
                    food.map((val) => {
                        return (
                            <div className="card p-2" style={{ width: '18rem' }}>
                                <img src={val.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{val.name}</h5>
                                    <p className="card-text">{val.desc}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Food
