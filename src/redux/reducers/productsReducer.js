import { ActionTypes } from "../constants/action-types";
import { cloneDeep } from "lodash";

const intialState = {
  products: [],
  product: [],
  category: []
};

const intialCartState = {
  cart: [],
};


const wishlistState ={
  wishlist:[]
}


const addProductToCart = (state, action) => {
  let products = cloneDeep(state.cart);
  products.push(action.payload)  
  products = products.filter((v, i, a) => a.findIndex(o => (o.id === v.id)) === i)
  return { ...state, cart: products };
}


const removeProductToCart = (state, action) => {
  let products = cloneDeep(state.cart);
  products = products.filter(item => item.id != action.payload);
  return { ...state, cart: products };
}

export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, product: action.payload };
    case ActionTypes.SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const cartProductsReducer = (state = intialCartState, action) => {

  switch (action.type) {
    case ActionTypes.ADD_SELECTED_PRODUCT:
      return addProductToCart(state, action);
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return removeProductToCart(state, action);
    default:
      return state;
  }
};


export const wishlistReducer = (state = wishlistState, action) => {
  
  switch (action.type) {
    case ActionTypes.SET_WISHLIST:
      let itemIds = cloneDeep(state.wishlist);
      if(itemIds.includes(action.payload)){
        itemIds = itemIds.filter(id=>id != action.payload)
      }else{
        itemIds = [...itemIds, action.payload]; 
      }
      return { ...state, wishlist: itemIds };
    default:
      return state;
  }
};
