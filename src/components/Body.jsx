import React from 'react'
import ProductCard from './ProductCard'
import { productData } from '../utils/constants'

const Body = () => {
  return (
    <div className='body'>
      <ProductCard productData={productData}/>
    </div>
  )
}

export default Body
