import { combineReducers } from "redux";
import ReduxCounterReducer from "./ReduxCounterReducer";
import ReduxShoppingCartReducer from "./ReduxShoppingCartReducer";
import ReduxTodoListReducer from "./ReduxTodoListReducer";

const ReduxRootReducer = combineReducers({
    counter: ReduxCounterReducer
    ,shoppingCart: ReduxShoppingCartReducer
    ,todoList: ReduxTodoListReducer
});

export default ReduxRootReducer;
