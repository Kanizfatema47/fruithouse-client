import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
          <button >
            Delivered
          </button>
        </div>
      </div>
    );
};

export default Inventory;