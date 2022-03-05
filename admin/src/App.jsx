import './App.css';
import Home from './components/pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import UserList from './components/pages/userList/UserList';
import User from './components/pages/user/User';
import Newuser from './components/pages/newUser/Newuser';
import ProductList from './components/pages/productList/ProductList';
import Product from './components/pages/product/Product';
import NewProduct from './components/pages/newProduct/NewProduct';
function App() {
  return (
    <Router>
      <Topbar/>
      <div className='container'>
      <Sidebar/>
     
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/users' element={<UserList/>}/>
      <Route path='/user/:userId' element={<User/>}/>
      <Route path='/newuser' element={<Newuser/>}/>
      <Route path='/products' element={<ProductList/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/newproduct' element={<NewProduct/>}/>
      </Routes>
      
      </div>
      
    </Router>
  );
}

export default App;
