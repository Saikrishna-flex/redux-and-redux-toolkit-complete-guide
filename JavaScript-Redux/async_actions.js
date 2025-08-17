const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios');
const thunk  = require('redux-thunk').thunk;

// Action Types
const FETCH_REQUEST = 'FETCH_REQUEST'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'

// Action creators
const fetchRequest = () =>{
    return {
        type : FETCH_REQUEST
    }
}

const fetchSuccess = (products) =>{
    return {
        type : FETCH_SUCCESS,
        payload : products
    }
}

const fetchError = () =>{
    return {
        type : FETCH_ERROR
    }
}


// Initial State
const initialState = {
    loading: false,
    products: [],
    error: false
}

// Reducer function
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_REQUEST:
            return{
                ...state, loading: true
            }
        case FETCH_SUCCESS:
            return{
                ...state, loading:false, products:action.payload
            }
        case FETCH_ERROR:
            return{
                ...state, loading:false, error:true
            }
        default:
            return state
    }
}

// Thunk action creator
const fetchProducts = () =>{
    return function(dispatch){
        dispatch(fetchRequest())
        axios.get('https://fakestoreapi.com/products')
        .then(res =>{
            const products = res.data.map((product) => product.title)
            dispatch(fetchSuccess(products))
        }).catch(error =>{
            dispatch(fetchError())
        })
    }
}


// Store
const store = createStore(reducer, applyMiddleware(thunk))

console.log(store.getState());
store.subscribe(()=> console.log(store.getState()))
store.dispatch(fetchProducts())