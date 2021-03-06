import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDtails = ({product}) => {
    const {_id,name,img,price,quantity,description} = product;

     const navigate = useNavigate();

     const navigattoproductDetails = (id) => {
       navigate(`/manageitems/${id}`);
     };
    return (
        <div className="lg:w-1/4 flex justify-center flex-col items-center px-5 text-center border-solid border-2 mx-5 my-3">
        <img src={img}alt='' className='w-full' />

        <span>
          <strong>Name : </strong>
          {name}
        </span>
        <p>
          <strong>Description : </strong>
          {description}
        </p>
        <p>
          <strong>Quantity : </strong>
          {quantity}
        </p>
        <span>
          <strong>Price : </strong>
          {price}$
        </span>

        <button
          className=" mb-3 bg-rose-500 text-white rounded-md px-2 py-2"
          onClick={() => navigattoproductDetails(_id)}
        >
          Update
        </button>
      </div>
    );
    };

export default ProductDtails;