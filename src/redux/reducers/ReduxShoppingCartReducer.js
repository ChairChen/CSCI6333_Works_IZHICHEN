import {
     ADD_ITEM
    ,DELETE_ITEM
    ,INCREMENT_QTY
    ,DECREMENT_QTY
    ,CLEAR_CART
} from "../actions/ReduxShoppingCartActions";

const initialState = [{ id: 0, name: "", price: 0}];

export default function ReduxShoppingCartReducer(state = initialState, action) {
    switch (action.type) { // concern: if the cart grows as time, this kinda spread shallow copy might not be ideal way to do
        case ADD_ITEM:
            // return { ...state, state.push(action.payload) };
        case DELETE_ITEM:
        case INCREMENT_QTY:
        case DECREMENT_QTY:
        case CLEAR_CART:
        default:
    }
}
