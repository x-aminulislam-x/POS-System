import { combineReducers, createStore } from "redux";
import addedProductsReducers from "./reducers/addedProductsReducers";
import productsReducers from "./reducers/productsReducers";

// using combineReducers to use multiple reudcers
const rootReducers = combineReducers({ productsList: productsReducers, addedProducts: addedProductsReducers })

const store = createStore(rootReducers)


export default store;