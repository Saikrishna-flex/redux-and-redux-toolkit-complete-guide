const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    pizzaBase : 1000
}

const pizzaSlice = createSlice({
    name : 'pizza',
    initialState,
    reducers:{
        order_pizza : (state)=>{
            state.pizzaBase = state.pizzaBase - 1
        },
        increment_pizza: (state)=>{
            state.pizzaBase = state.pizzaBase + 1
        }
    }
});

console.log(pizzaSlice)
module.exports = pizzaSlice.reducer;  // default export
module.exports.pizzaActions = pizzaSlice.actions; //named export
