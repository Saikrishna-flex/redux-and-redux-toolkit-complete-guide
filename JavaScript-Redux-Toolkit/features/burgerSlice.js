const createSlice = require('@reduxjs/toolkit').createSlice;
const pizzaActions = require("../features/pizzaSlice").pizzaActions;

const initialState = {
    burgerBuns : 200
}

const burgerSlice =  createSlice({
    name: 'burger',
    initialState,
    reducers:{
        order_burger : (state)=>{
            state.burgerBuns--
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(pizzaActions.order_pizza, ( )=>{
            state.burgerBuns--;
        })
    }
})

module.exports = burgerSlice.reducer;
module.exports.burgerActions = burgerSlice.actions;