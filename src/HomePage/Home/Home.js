import React from 'react';
import Accordion from '../../Pages/Accordion/Accordion';
import Products from '../../Pages/Products/Products';
import Login from '../../Pages/Register/Login/Login';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            {/* <Header></Header>
            <Banner></Banner> */}
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;

