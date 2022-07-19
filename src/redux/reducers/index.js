import { combineReducers } from "redux";
import { productsReducer, cartProductsReducer ,} from "./productsReducer";
import {checkoutReducer} from "./checkoutReducer";


const reducers = combineReducers({
  product: productsReducer,
  cart: cartProductsReducer,
  checkout: checkoutReducer,
});
export default reducers;
