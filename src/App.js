import './App.css';
import Banner from './HomePage/Banner/Banner';
import Footer from './HomePage/Footer/Footer';
import Header from './HomePage/Header/Header';
import Products from './Pages/Products/Products';
import Login from './Pages/Register/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;
