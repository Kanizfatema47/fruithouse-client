import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './HomePage/Footer/Footer';
import Header from './HomePage/Header/Header';
import Products from './Pages/Products/Products';
import Login from './Pages/Register/Login/Login';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './HomePage/Home/Home'
import Accordion from './Pages/Accordion/Accordion';
import SignUp from './Pages/Register/SignUp/SignUp';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ContactUs from './HomePage/ContactUs/ContactUs';
function App() {
  return (
    <div className="App">
      <Header></Header>

      
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/blogs' element={<Accordion></Accordion>}/>
        <Route path='/products' element={<Products></Products>}/>
        <Route path='/manageitems/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }/>
        <Route path='/contact' element={<ContactUs></ContactUs>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<SignUp></SignUp>}/>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
