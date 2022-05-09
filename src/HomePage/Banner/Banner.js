import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='lg:mt-0 sm:mt-32'>
            <div className=" lg:w-screen h-screen background ">

<div className="max-w-screen-xl px-4 py-8 ml-32 lg:h-screen lg:items-center lg:flex">

    <div className="lg:mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 ">
            The new fresh  <br />
            <span className="sm:block text-5xl">
                fruit warehouse
            </span>
        </h1>

        <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-lg">
            We are convinced that a high level of social responsibility is in the best interest of all stakeholders in the production chain; from growers to consumers and we also believe that these high standards deserve our moral and financial support.                    </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-green-500 border border-green-500 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-black focus:outline-none focus:ring sm:px-8 py-2" href="/get-started">
                Get Started
            </a>

            <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-green-500 border border-green-500 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-black focus:outline-none focus:ring" href="/about">
                Learn More
            </a>
        </div>
    </div>
</div>
</div>
        </div>




    );
};

export default Banner;