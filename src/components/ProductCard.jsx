import React, { useEffect, useState } from 'react'
import Product from './Product'
import { productData } from '../utils/constants'
import Skeleton from './Skeleton';


const ProductCard = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [products, setProducts] = useState([]);

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            let res = await fetch("https://fakestoreapi.com/products");
            res = await res.json();
            setProducts(res);

            setAllProducts(res);
        }
        fetchProducts();
    }, [])
    const handleTopRatedClick = () => {
        console.log("button clicked");
        setProducts(allProducts.filter((product) => product.rating.rate >= 4))
    };

    const handleSearchClick = () => {

        console.log("search clicked", searchTerm);
        setProducts(allProducts.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase())));

    };
    return (!products.length ? <Skeleton /> : <div>

        <div style={{
            marginTop: "10px",
            marginLeft: "10px"
        }}><input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={handleSearchClick}>Search</button>
        </div>
        <button
            onClick={handleTopRatedClick}
            style={{
                marginTop: "10px",
                marginLeft: "10px"
            }}>Top Rated Products</button>

        <div className='product-card'>
            {
                products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        ratings={product.rating.rate}
                        price={product.price} img={product.image} />

                ))
            }
        </div>
    </div>

    )
}

export default ProductCard
