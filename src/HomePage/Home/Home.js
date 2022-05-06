import React from 'react';
import Accordion from '../../Pages/Accordion/Accordion';
import Login from '../../Pages/Register/Login/Login';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            {/* <Header></Header>
            <Banner></Banner> */}
            <Banner></Banner>
            <Login></Login>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;

