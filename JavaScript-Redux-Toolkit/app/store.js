const configureStore = require("@reduxjs/toolkit").configureStore;
const pizzReducer = require("../features/pizzaSlice");
const burgerReducer = require("../features/burgerSlice");
const productReducer = require("../features/productSlice");
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();
const store = configureStore({
    reducer:{
        pizza:pizzReducer,
        burger:burgerReducer,
        product:productReducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

module.exports = store;