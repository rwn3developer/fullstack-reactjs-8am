import React, { useState } from 'react'

const Hoc = (Wrappedcomponent) => {
  
    const Counter = () => {
        const [no,setNo] = useState(0);

        const Increment = () =>{
            setNo(no+1)
        }

        return <Wrappedcomponent no={no} increment={Increment}></Wrappedcomponent>
    }

    return Counter
}

export default Hoc
