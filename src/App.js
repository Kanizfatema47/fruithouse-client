import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './HomePage/Banner/Banner';
import Footer from './HomePage/Footer/Footer';
import Header from './HomePage/Header/Header';
import Products from './Pages/Products/Products';
import Login from './Pages/Register/Login/Login';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './HomePage/Home/Home'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Login></Login>
      <Footer></Footer>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
