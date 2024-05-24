import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import View from "./pages/View"


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Add/>}/>
              <Route path="/view" element={<View/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
