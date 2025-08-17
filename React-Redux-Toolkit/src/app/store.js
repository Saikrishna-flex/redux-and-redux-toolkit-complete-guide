import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../features/pizza/pizzaSlice";
import burderReducer from "../features/burger/burgerSlice";
import productReducer from "../features/product/productSlice";

const store = configureStore({
    reducer:{
        pizza: pizzaReducer,
        burger: burderReducer,
        product: productReducer
    }
})

export default store