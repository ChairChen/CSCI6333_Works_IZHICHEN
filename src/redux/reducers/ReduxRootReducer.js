import { combineReducers } from "redux";
import ReduxCounterReducer from "./ReduxCounterReducer";
import ReduxShoppingCartReducer from "./ReduxShoppingCartReducer";

const ReduxRootReducer = combineReducers({
    counter: ReduxCounterReducer
    ,shoppingCart: ReduxShoppingCartReducer
});

export default ReduxRootReducer;
