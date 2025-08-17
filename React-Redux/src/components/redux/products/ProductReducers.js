import { fechStart } from "./ProductActions"
import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "./ProductTypes"

const initialState = {
    loading : false,
    products: [],
    error : ''
}

export const productsReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                loading : true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading : false,
                products: action.payload
            }
        case FETCH_ERROR: 
            return {
                ...state,
                loading : false,
                error :  action.payload
            }
        default:
            return state
    }
}


