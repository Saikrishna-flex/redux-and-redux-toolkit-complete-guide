import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productSlice';

function ProductView() {
   const product = useSelector((state) => state.product);
   const dispatch = useDispatch();
   useEffect(()=>{
    dispatch(fetchProducts())
   },[])
  return (
    <div>
        <h3> ProductView </h3>
        {product.loading && <h1>Loading...</h1>}
        {product.error && <h1>{product.error}</h1>}
        {product.products.length > 0 &&  product.products.map((item, index)=> <p key={index}>{item}</p> )}
    </div> 
  )
}

export default ProductView