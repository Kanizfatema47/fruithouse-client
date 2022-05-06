import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './HomePage/Banner/Banner';
import Footer from './HomePage/Footer/Footer';
import Header from './HomePage/Header/Header';
import Products from './Pages/Products/Products';
import Login from './Pages/Register/Login/Login';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './HomePage/Home/Home'
import Accordion from './Pages/Accordion/Accordion';
import SignUp from './Pages/Register/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/blogs' element={<Accordion></Accordion>}/>
        <Route path='/register' element={<SignUp></SignUp>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
