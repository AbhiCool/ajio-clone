import React from 'react'
import { useNavigate } from 'react-router-dom';


const Product = ({ id, title, ratings, price, img }) => {

  const navigate = useNavigate();
  return (
    <div className='product' onClick={() => navigate(`/product-details/${id}`)}>
      <img className='product_img' src={img} alt="" />
      <h2 className='product-header' title={title}>{title}</h2>
      <p>{ratings} ratings</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default Product
