import { useState } from "react"
import A from "./component/A"
import B from "./component/B"
import C from "./component/C"
import UserContext from "./UserContext"
import Reducer from "./component/Reducer"

function App() {

  const [user, setUser] = useState("aja")
  const [phone, setPhone] = useState(121212)

  return (
    <>
      <UserContext.Provider value={{user,phone}}>
        {/* <A /> */}
        <Reducer/>
      </UserContext.Provider>
    </>
  )
}

export default App
