import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    pizzaBase : 1000
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers : {
        order_pizza : (state, action) =>{
            state.pizzaBase = state.pizzaBase - 1
        },
        customer_choice : (state, action) =>{
            state.pizzaBase = state.pizzaBase - action.payload
        }  
    }
    
});

export default pizzaSlice.reducer;
export const {order_pizza, customer_choice} = pizzaSlice.actions;