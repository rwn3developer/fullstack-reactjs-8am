import { useEffect, useState } from "react"
import Add from "./Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./View";
import Edit from "./Edit";
import Api from "./Api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/axiosapi" element={<Api />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
