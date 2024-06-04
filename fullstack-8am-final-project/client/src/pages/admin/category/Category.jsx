import React from 'react'
import Header from '../../../components/Header'
import Leftsidebar from '../../../components/Leftsidebar'

const Category = () => {
  return (
  
        <>
            <Header/>
            <div className="container">
                <h3 align="center">Category</h3>
                <div className="row">
                    <div className="col-lg-3">
                        <Leftsidebar/>
                    </div>
                </div>
            </div>
        </>
    
  )
}

export default Category
