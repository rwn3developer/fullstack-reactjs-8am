import { useState } from 'react'
import Record from './Record'

function Data() {
  
    const [filterrecord,setfilterRecord] = useState([]);
  const [data,setData] = useState([
      {
        id : 1,
        name : 'vivo',
        category : "mobile"
      },
      {
        id : 2,
        name : 'oppo',
        category : "mobile"
      },
      {
        id : 3,
        name : 'samsung',
        category : "mobile"
      },
      {
        id : 11,
        name : 't.v',
        category : "electronics"
      },
      {
        id : 21,
        name : 'a.c',
        category : "electronics"
      },
      {
        id : 31,
        name : 'laptop',
        category : "electronics"
      }
  ])

  const [category,setCategory] = useState([
      {
        id : 1,
        category : 'mobile'
      },
      {
        id : 2,
        category : 'electronics'
      }
  ])

  const filterData = (category) => {
    if(category === "all"){
        setfilterRecord(data)
    }else{
        let d = data.filter(item => item.category === category);
        setfilterRecord(d);
    }
       
  }

  return (
    <>
      <Record
        category={category}
        record={data}
        filter={filterData}
        filterrecord={filterrecord}
      />
    </>
  )
}

export default Data
