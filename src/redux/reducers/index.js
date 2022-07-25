import { combineReducers } from "redux";
import { productsReducer, cartProductsReducer, wishlistReducer} from "./productsReducer";
import {checkoutReducer} from "./checkoutReducer";


const reducers = combineReducers({
  product: productsReducer,
  cart: cartProductsReducer,
  checkout: checkoutReducer,
  wishlist: wishlistReducer,
});
export default reducers;
