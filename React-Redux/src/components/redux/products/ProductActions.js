import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "./ProductTypes";
import axios from 'axios';


export const fechStart = () =>{
    return {
        type : FETCH_START
    }
}

export const fetchSuccess = (products) =>{
    return {
        type : FETCH_SUCCESS,
        payload : products
    }
}

export const fetchError = (err) =>{
    return {
        type : FETCH_ERROR,
        payload : err
    }
}


// Thunk Action creator
export const fetchProducts = () =>{
    return (dispatch)=>{
        dispatch(fechStart());
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            const products = res.data;
            dispatch(fetchSuccess(products));
        }).catch((err)=>{
            const errorMsg = err.message;
            dispatch(fetchError(errorMsg));
        })
    }
}