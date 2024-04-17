import React from 'react'
import './menu.css'

const Menu = ({category,filterbtn}) => {

  const filterData = (cat) => {
    filterbtn(cat)
  }

  return (
    <div>
        <ul>
            {
              category.map((item)=>{
                return (
                  <li>
                    <button onClick={ () => filterData(item.category) } className='btn btn-success'>{item.category}</button>
                  </li>
                )
              })
            }
        </ul>
    </div>
  )
}

export default Menu
