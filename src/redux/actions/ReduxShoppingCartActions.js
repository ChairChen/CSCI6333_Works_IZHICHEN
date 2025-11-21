export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const INCREMENT_QTY = "INCREMENT_QTY";
export const DECREMENT_QTY = "DECREMENT_QTY";
export const CLEAR_CART = "CLEAR_CART";

export const AddItem = (item) => ({ type: ADD_ITEM, payload: item });
export const DeleteItem = (item) => ({ type: DELETE_ITEM, payload: item });
export const IncrementQTY = (item) => ({ type: INCREMENT_QTY, payload: item });
export const DecrementQTY = (item) => ({ type: DECREMENT_QTY, payload: item });
export const ClearCart = () => ({ type: CLEAR_CART });