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
    
const [quantity, setQuantity] = useState();

         useEffect(() => {
           setQuantity(product.quantity);
         }, [product]);


         const reduceQuantity = (id) => {

          setQuantity(quantity - 1);

           const updatedquantity = { quantity };


           const url =` http://localhost:8000/reduce/${id}`;
           fetch(url, {
             method: "PUT",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(updatedquantity),
           })
             .then((res) => res.json())
             .then((data) => {
               console.log("succes", data);
             });

     

     };

   
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
            {quantity}
          </p>
          <p>
            <strong>Supplier name :</strong>
            {product.suppliername}
          </p>
          <p>
            <strong>Price : </strong>
            {product.price}
          </p>
          <button onClick={() => reduceQuantity(product._id)} className='text-lg rounded font-bold bg-rose-400 px-5 py-3 my-3'>
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