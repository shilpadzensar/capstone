import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const addSelectedProduct = (payload) => {
  return {
    type: ActionTypes.ADD_SELECTED_PRODUCT,
    payload
  };
};

export const removeSelectedProduct = (payload) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload
  };
};


export const setFilter = (filter) => {
  return {
    type: ActionTypes.SET_FILTER,
    payload: filter,
  };
};


export const setWishlist = (id) => {
  return {
    type: ActionTypes.SET_WISHLIST,
    payload: id,
  };
};

