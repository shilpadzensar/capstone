import { ActionTypes } from "../constants/action-types";

export const updateCheckoutState = (payload) => {
  return {
    type: ActionTypes.UPDATE_CHECKOUT_STATE,
    payload
  };
};

export const updateContactInfo = (payload) => {
  return {
    type: ActionTypes.UPDATE_CONTACT_INFO,
    payload
  };
};

export const updateShippingInfo = (payload) => {
  return {
    type: ActionTypes.UPDATE_SHIPPING_METHOD,
    payload
  };
};

export const updatePaymentInfo = (payload) => {
  return {
    type: ActionTypes.UPDATE_PAYMENT_INFO,
    payload
  };
};
