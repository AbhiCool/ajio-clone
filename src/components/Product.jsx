import React from 'react'


const Product = ({title,ratings,price,img}) => {
  return (
    <div className='product'>
      <img className='product_img' src={img} alt="" />
      <h2 className='product-header' title={title}>{title}</h2>
      <p>{ratings} ratings</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default Product
