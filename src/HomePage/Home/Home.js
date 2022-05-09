import React from 'react';
import AddItems from '../../Pages/AddItems/AddItems';
import MyItems from '../../Pages/MyItems/MyItems';
import Products from '../../Pages/Products/Products';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            {/* <Header></Header>
            <Banner></Banner> */}
            <Banner></Banner>
            <Products></Products>
            <MyItems></MyItems>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;

