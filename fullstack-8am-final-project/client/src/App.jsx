import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/home' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
