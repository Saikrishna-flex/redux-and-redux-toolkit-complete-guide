import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux';

const ProductsContainer = () => {
    const productsData = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);

  return (
    <div>
        { productsData.loading && <h1>Loading...</h1> }
        { productsData.error && <h1>{productsData.error}</h1> }
        { productsData.products && <div>{productsData.products.map((product) =>  <p key={product.id}>{product.title}</p>)}</div>}
    </div>
  )
}

export default ProductsContainer