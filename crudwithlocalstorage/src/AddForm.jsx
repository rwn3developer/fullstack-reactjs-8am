import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

export const AddForm = ({ onchange, single }) => {

    const [editid, setEditId] = useState("")
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [data, setData] = useState([])



    const hendalsubmit = (event) => {
        event.preventDefault()

        let obj = {
            id: Math.floor(Math.random() * 100),
            name: name,
            phone: phone
        }

        if (editid) {
            let data = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : [];
            let u = data.map((item)=>{
                if(item.id == editid){
                    return {
                        ...item,
                        name : name,
                        phone : phone
                    }
                }
                return item
            })
            localStorage.setItem('data',JSON.stringify(u));
            alert("Record update");
            setEditId("");
        } else {
            setData([...data, obj])
            let localData = JSON.parse(localStorage.getItem('data')) || [];

            let MergeData = [...localData, obj]

            localStorage.setItem('data', JSON.stringify(MergeData))
        }


        setName('')
        setPhone('')
        let Alldata = JSON.parse(localStorage.getItem('data'));
        // setData(Alldata)
        onchange(Alldata)

    }

    useEffect(() => {
        if (single) {
            setEditId(single.id)
            setName(single.name)
            setPhone(single.phone)
        }
    }, [single])


    return (
        <Form onSubmit={hendalsubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" onChange={(event) => setName(event.target.value)} value={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone Number" onChange={(event) => setPhone(event.target.value)} value={phone} />
                {
                    editid ? (
                        <button type='submit' className='btn btn-success mt-4' >Update</button>
                    ) : (
                        <button type='submit' className='btn btn-success mt-4' >Save</button>
                    )
                }

            </Form.Group>
        </Form>
    );
}

