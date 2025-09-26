import React, { useEffect, useState } from 'react'

const useGetSingleProduct = (id) => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const fetchSingleProduct = async (id) => {
        setLoading(true);
        let res = await fetch("https://fakestoreapi.com/products/" + id);
        res = await res.json();
        setProduct(res);
        setLoading(false);
    }

    useEffect(() => {
        fetchSingleProduct(id);
    }, [id]);



    return [loading, product];
}

export default useGetSingleProduct
