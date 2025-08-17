const store = require("./app/store");
const { fetchProducts } = require("./features/productSlice");
const pizzaActions = require("./features/pizzaSlice").pizzaActions;
const burgerActions = require("./features/burgerSlice").burgerActions;

console.log("initial state", store.getState());

store.subscribe(() =>{
    console.log("Updated State", store.getState());
});

// store.dispatch(pizzaActions.order_pizza());
// store.dispatch(pizzaActions.order_pizza());
// store.dispatch(pizzaActions.order_pizza());
// store.dispatch(pizzaActions.increment_pizza());
// store.dispatch(burgerActions.order_burger());

store.dispatch(fetchProducts())