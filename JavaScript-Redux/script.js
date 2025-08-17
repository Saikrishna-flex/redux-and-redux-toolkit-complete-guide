const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
// Action or Action Type
const ORDER_PIZZA = 'ORDER_PIZZA'
const ORDER_BURGER = 'ORDER_BURGER'

// const action = {
//     type: ORDER_PIZZA
// }

// Action creator 
const orderPizza = () => {
    return {
            type: ORDER_PIZZA
        }
}
const orderBurger = () => {
    return {
            type: ORDER_BURGER
        }
}

// State
const initialStateofPizza = {
    pizzaBase: 100,
}
const initialStateofBurger = {
    burgerBuns: 200
}

// reducer
const pizzaReducer = (state = initialStateofPizza, action) =>{
    switch(action.type){
        case 'ORDER_PIZZA' : 
            return {
                ...state,
                pizzaBase : state.pizzaBase - 1
            }
        default : 
            return state
    }

}

const burgerReducer = (state = initialStateofBurger, action) =>{
    switch(action.type){
        case ORDER_BURGER : 
            return {
                ...state,
                burgerBuns :state.burgerBuns - 1 
            }
        default : 
            return state
    }

}

const rootReducer= combineReducers({
    pizza: pizzaReducer,
    burger: burgerReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

console.log(store.getState());

const unscribe = store.subscribe(()=>{
    // console.log(store.getState())
});

store.dispatch(orderPizza());

store.dispatch(orderBurger());

store.dispatch(orderPizza());

store.dispatch(orderBurger());
unscribe()
