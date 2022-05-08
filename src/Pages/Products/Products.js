import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseProducts from '../../components/Hook/UseProducts/UseProducts';
import ProductDtails from '../ProductDetails/ProductDtails';

const Products = () => {
    // const [products , setProducts] = useState([]);

    // useEffect(() => {
    //   fetch('fakeData.json')
    //   .then(res => res.json())
    //   .then(data => setProducts(data))
    // },[])

    const [products , setProducts] = UseProducts();

    return (
        // <div class="flex justify-center">
        //     <div class="rounded-lg shadow-lg bg-white max-w-sm">
        //         <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        //             <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
        //         </a>
        //         <div class="p-6">
        //             <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
        //             <p class="text-gray-700 text-base mb-4">
        //                 Some quick example text to build on the card title and make up the bulk of the card's
        //                 content.
        //             </p>
        //             <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        //         </div>
        //     </div>
        // </div>
         <div className="flex justify-center flex-col items-center">
         <h2 className="text-center my-5 text-3xl">Stored Fruits</h2>
         <div className="flex  rounded-lg shadow-lg flex-wrap lg:flex-row justify-center lg:px-10 sm:flex flex-col sm:px-5">
           {products.slice(0, 6).map((items) => (
          
             <ProductDtails key={items.id} product={items} />
           ))}
         </div>
         <Link to="/manageitems">
           <button className="mx-5 my-4 bg-rose-500 text-white rounded-md px-2 py-2">
             Manage Items
           </button>
         </Link>
       </div>
    );
};

export default Products;