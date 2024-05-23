import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {

    const [record,setRecord] = useState([]);

    const getUser = async() => {
       try{
            let {data} = await axios.get(`https://dummyjson.com/products`);
            setRecord(data.products);
       }catch(err){
            console.log(err);
            return false;
       }
    }

    useEffect(()=>{
        getUser();
    },[])

  return (
    <div>
        <table align='center' border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>title</th>
                    <th>thumbnail</th>
                    <th>images</th>
                </tr>
            </thead>
            <tbody>
                {
                   record.map((r)=>{
                    const {id,title,thumbnail,images} = r;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>
                                    <img src={thumbnail} width="100"/>
                                </td>
                                <td>
                                    {
                                        images.map((img ,index)=>{
                                            return (
                                                <img key={index} src={img} width="50" style={{marginRight : "10px"}}/>
                                            )
                                        })
                                    }
                                </td>
                            </tr>
                        )
                   })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Api
