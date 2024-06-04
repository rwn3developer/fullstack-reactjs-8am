import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import Leftsidebar from '../../../components/Leftsidebar'

const Product = () => {


  const [products, setProducts] = useState([])


  const getProduct = async () => {
   
    try {
      let all = await fetch(`http://localhost:8000/api/v1/product`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let res = await all.json();
      setProducts(res.products);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <h3 align="center">Product</h3>
        <div className="row">
          <div className="col-lg-3">
            <Leftsidebar />
          </div>
          <div className="col-lg-9">
            <table>
              <thead>
                <tr>
                  <td>Srno</td>
                  <td>Name</td>
                  <td>Image</td>
                  <td>Price</td>
                </tr>
              </thead>
              <tbody>
                  {
                    products.map((p,index)=>{
                        return (
                          <tr>
                            <td>{++index}</td>
                            <td>{p.name}</td>
                            <td>
                              <img src={p.image} alt="" width="70" />
                            </td>
                            <td>
                              {p.price}
                            </td>
                          </tr>
                        )
                    })
                  }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
