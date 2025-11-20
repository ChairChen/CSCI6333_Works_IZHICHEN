export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const INCREMENT_QTY = "INCREMENT_QTY";
export const DECREMENT_QTY = "DECREMENT_QTY";
export const CLEAR_CART = "CLEAR_CART";

export const AddItem = (payload) => ({ type: ADD_ITEM, payload: payload });
export const DeleteItem = (id) => ({ type: DELETE_ITEM, payload: id });
export const IncrementQTY = (id) => ({ type: INCREMENT_QTY, payload: id });
export const DecrementQTY = (id) => ({ type: DECREMENT_QTY, payload: id });
export const ClearCart = () => ({ type: CLEAR_CART });