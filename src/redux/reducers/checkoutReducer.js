import { ActionTypes } from "../constants/action-types";
import { cloneDeep } from "lodash";

const intialCheckoutState = {
  checkoutState: {
    contactInfo: true,
    shippingInfo: false,
    paymentInfo: false
  }
};

const updateCheckoutState = (state, action) => {
  let checkoutState = cloneDeep(state.checkoutState);
  checkoutState = { ...checkoutState, ...action.payload };

  return { ...state, checkoutState };
}


export const checkoutReducer = (state = intialCheckoutState, action) => {

  switch (action.type) {
    case ActionTypes.UPDATE_CHECKOUT_STATE:
      return updateCheckoutState(state, action);
    case ActionTypes.UPDATE_CONTACT_INFO:
        return { ...state, contactInformation: action.payload };
    case ActionTypes.UPDATE_SHIPPING_METHOD:
        return { ...state, shippingMethod: action.payload };
    case ActionTypes.UPDATE_PAYMENT_INFO:
        return { ...state, paymentInformation: action.payload };
    default:
      return state;
  }
};




