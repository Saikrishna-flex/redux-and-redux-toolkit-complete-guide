import { createSlice } from "@reduxjs/toolkit";
import { order_pizza } from "../pizza/pizzaSlice";

const initialState = {
    burgerBuns : 300
}

const burgerSlice = createSlice({
    name : 'burger',
    initialState,
    reducers:{
        order_burger:(state)=>{
            state.burgerBuns = state.burgerBuns - 1
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(order_pizza, (state)=>{
            state.burgerBuns = state.burgerBuns - 1
        })
    }
})

export default burgerSlice.reducer;
export const {order_burger} = burgerSlice.actions