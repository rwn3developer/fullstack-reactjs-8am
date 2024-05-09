import { BrowserRouter , Routes , Route } from "react-router-dom"
import Counter from "./Counter"
import View from "./View"
import Add from "./Add"
import Edit from "./Edit"

function App() {
  return (
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={<Counter/>}/>
                  <Route path="/crud" element={<View/>}/>
                  <Route path="/Add" element={<Add/>}/>
                  <Route path="/edit/:id" element={<Edit/>}/>
            </Routes>
      </BrowserRouter>
  )
}

export default App
