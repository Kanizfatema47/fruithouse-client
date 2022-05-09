import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseProductDetails from '../../components/Hook/UseProductDetails/UseProductDetails';

const Inventory = () => {
       const { id } = useParams();


       const [product] = UseProductDetails(id);
      //  const [product , setProducts] = useState({});

      //  useEffect(() => {
      //   fetch('fakeData.json')
      //   .then(res => res.json())
      //   .then(data => {
      //       data.find(setProducts(item => (
      //           item.id === id 
      //       )))
      //   })
      // },[])
    


   
    return (
     <div>
        <div className="lg:w-1/2 lg:mx-auto my-5 px-5 py-5 border-solid border-2 sm:mx-5">
        <h1 className="text-2xl ">Product Information</h1>
        <div>
          <img src={product.img} alt="item" />
          <h3>
            <strong>Name : </strong>: {product.name}
          </h3>
          <p>
            <strong>Description :</strong>
            {product.description}
          </p>
          <p>
            <strong>Quantity :</strong>
            {product.quantity}
          </p>
          <p>
            <strong>Supplier name :</strong>
            {product.suppliername}
          </p>
          <p>
            <strong>Price : </strong>
            {product.price}
          </p>
          <button className='text-lg rounded font-bold bg-rose-400 px-5 py-3 my-3'>
            Delivered
          </button>
        </div>
       
      </div>
      <Link to='/additems'>
      <button  className='text-lg rounded font-bold bg-rose-400 px-5 py-3 my-3'>
            Add items
          </button></Link>
     </div>
       
    );
};

export default Inventory;