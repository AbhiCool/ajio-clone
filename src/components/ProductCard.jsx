import React from 'react'
import Product from './Product'

const ProductCard = ({productData}) => {
    return (
        <div className='product-card'>
            {
                productData.map((product) => (

                    <Product
                    key={product.id}
                        title={product.title}
                        ratings={product.rating.rate}
                        price={product.price} img={product.image} />

                ))
            }
        </div>

    )
}

export default ProductCard
