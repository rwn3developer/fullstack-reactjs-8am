import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import View from "./pages/View"
import Edit from "./pages/Edit"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
              <Route path="/add" element={<Add/>}/>
              <Route path="/view" element={<View/>}/>
              <Route path="/edit" element={<Edit/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// https://github.com/rwn3developer/react-firebase-firestore-realtime-database-crud-with-image-upload/tree/main/react-firebase-realrime-database
