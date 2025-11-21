import {
     ADD_ITEM
    ,DELETE_ITEM
    ,INCREMENT_QTY
    ,DECREMENT_QTY
    ,CLEAR_CART
} from "../actions/ReduxShoppingCartActions";

const initialState = { items: [] };

export default function ReduxShoppingCartReducer(state = initialState, action) {
    switch (action.type) { // concern: if the cart grows as time, this kinda spread shallow copy might not be ideal way to do
        case ADD_ITEM:
            const foundItem = state.items.find( (item) => item.id === action.payload.id );
            return (foundItem) ? state : { items: [ ...state.items, { ...action.payload, qty: 1 } ] };
        case DELETE_ITEM:
            return { items: state.items.filter( (item) => item.id !== action.payload.id ) };
        case INCREMENT_QTY:
            return { items: state.items.map( (item) => 
                ( item.id === action.payload.id )
                ? { ...item, qty: item.qty + 1 }
                : item
            ) };
        case DECREMENT_QTY:
            return { items: state.items.map( (item) => 
                ( item.id === action.payload.id && item.qty > 1 )
                ? { ...item, qty: item.qty - 1 }
                : item
            ) };
        case CLEAR_CART:
            return { items: [] };
        default:
            return state;
    }
}
