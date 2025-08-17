import { combineReducers } from "redux";
import pizzaReducer from "./pizza/PizzaReducer";
import burgerReducer from "./burger/BurgerReducer";
import { productsReducer } from "./products/ProductReducers";

const rootReducer = combineReducers({
    pizza : pizzaReducer,
    burger : burgerReducer,
    product : productsReducer
});

export default rootReducer;