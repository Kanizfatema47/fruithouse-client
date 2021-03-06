import React, { useEffect, useState } from 'react';

const UseProductDetails = (id) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
      const url = `http://localhost:8000/inventory/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);


    return [product];
};

export default UseProductDetails;