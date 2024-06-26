import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Adminroute from './Private/Adminroute';
import Category from './pages/admin/category/Category';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Product from './pages/admin/product/Product';
import Userproduct from './pages/product/Userproduct';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/userproduct' element={<Userproduct/>}/>


              {/* admin route */}
                <Route element={<Adminroute/>}>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/category' element={<Category/>}/>
                    <Route path='/product' element={<Product/>}/>
                </Route>
                  
             
          </Routes>
      </BrowserRouter>
  )
}

export default App
