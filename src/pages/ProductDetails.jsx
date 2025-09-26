import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useGetSingleProduct from '../hooks/useGetSingleProduct';

const ProductDetails = () => {
    const { id } = useParams();


    const [loading, productDetails] = useGetSingleProduct(id);
    /*{
  "id": 0,
  "title": "string",
  "price": 0.1,
  "description": "string",
  "category": "string",
  "image": "http://example.com"
}*/
    return (
        loading ? <h1>Loading...</h1> : (
            <div className='productDetails' style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                <div>
                    <img src={productDetails.image} alt="" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h1>{productDetails.title}</h1>
                    <h3>{productDetails.price}</h3>
                    <p>{productDetails.description}</p>
                    <h4>{productDetails.category}</h4>
                </div>

            </div>)
    );
}

export default ProductDetails
